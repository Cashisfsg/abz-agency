import { useRef, useImperativeHandle, forwardRef } from "react";
import {
    StyledInputTypeText,
    StyledInputTypeRadio,
    StyledInputTypeFile
} from "shared/ui";

interface InputFieldProps {
    type?: "text" | "email" | "tel" | "radio" | "file";
    label: string;
    value?: string | number;
    "aria-invalid"?: boolean;
    "aria-errormessage"?: string | undefined;
    helperText?: string;
}

// type InputFieldProps =
//     | {
//           type?: "text" | "email" | "tel";
//           label: string;
//           value?: never;
//           "aria-invalid": boolean;
//           "aria-errormessage": string | undefined;
//           helperText?: string;
//       }
//     | {
//           type: "radio";
//           label: string;
//           value: string | number;
//           "aria-invalid": undefined;
//           "aria-errormessage": never;
//           helperText: never;
//       }
//     | {
//           type: "file";
//           label: string;
//           value: FileList;
//           "aria-invalid": undefined;
//           "aria-errormessage": never;
//           helperText: never;
//       };

export const Input = forwardRef<HTMLInputElement, InputFieldProps>(
    (
        {
            type,
            label,
            value,
            "aria-invalid": ariaInvalid,
            "aria-errormessage": ariaErrorMessage,
            helperText,
            ...props
        },
        ref
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

        const loadFile = () => {
            if (inputRef.current) inputRef.current.click();
        };

        if (type === "radio")
            return (
                <StyledInputTypeRadio>
                    <input
                        type={type}
                        value={value}
                        ref={inputRef}
                        {...props}
                    />
                    <span>{label}</span>
                </StyledInputTypeRadio>
            );

        if (type === "file")
            return (
                <StyledInputTypeFile>
                    <input
                        type="file"
                        aria-invalid={ariaInvalid}
                        aria-errormessage="photo-error"
                        hidden
                        ref={inputRef}
                        {...props}
                    />
                    <button
                        type="button"
                        onClick={loadFile}
                    >
                        upload
                    </button>
                    <span>
                        {(inputRef.current &&
                            inputRef.current.files &&
                            inputRef.current.files[0]?.name) ||
                            "Upload your image"}
                    </span>
                    <output
                        id="photo-error"
                        role="alert"
                    >
                        {ariaInvalid && ariaErrorMessage}
                    </output>
                </StyledInputTypeFile>
            );

        return (
            <StyledInputTypeText>
                <span>{label}</span>
                <input
                    type={type || "text"}
                    placeholder={label}
                    aria-invalid={ariaInvalid}
                    aria-errormessage={`${props.name}-error`}
                    ref={inputRef}
                    aria-describedby={`${props.name}-help`}
                    {...props}
                />
                {ariaErrorMessage ? (
                    <output
                        id={`${props.name}-error`}
                        role="alert"
                    >
                        {ariaErrorMessage}
                    </output>
                ) : (
                    helperText && (
                        <output id={`${props.name}-help`}>{helperText}</output>
                    )
                )}
            </StyledInputTypeText>
        );
    }
);
