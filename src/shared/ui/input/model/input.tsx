import { useRef, useImperativeHandle, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

import { NewUser } from "entities/users";
import {
    StyledInputTypeText,
    StyledInputTypeRadio,
    StyledInputTypeFile
} from "shared/ui";

// interface InputFieldProps {
//     type?: "text" | "email" | "tel" | "radio" | "file";
//     label: string;
//     value?: string | number;
//     "aria-invalid"?: boolean;
//     errorText?: string | undefined;
//     helperText?: string;
// }

type InputFieldProps =
    | {
          type?: "text" | "email" | "tel";
          label: string;
          value?: never;
          "aria-invalid": boolean;
          errorText: string | undefined;
          helperText?: string;
      }
    | {
          type: "radio";
          label: string;
          value: string | number;
          "aria-invalid": undefined;
          errorText: never;
          helperText: never;
      }
    | {
          type: "file";
          label: string;
          value: never;
          "aria-invalid": undefined;
          errorText: never;
          helperText: never;
      };

export const Input = forwardRef<
    HTMLInputElement,
    InputFieldProps & ReturnType<UseFormRegister<NewUser>>
>(
    (
        {
            type,
            label,
            value,
            "aria-invalid": ariaInvalid,
            errorText,
            helperText,
            ...props
        },
        reference
    ) => {
        const { ref, ...restProps } = props;

        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(
            reference,
            () => inputRef.current as HTMLInputElement
        );

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
                        {...restProps}
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
                        {...restProps}
                    />
                    <button
                        type="button"
                        onClick={loadFile}
                    >
                        upload
                    </button>
                    <span id="photo-name">Upload your image</span>
                    <output
                        id="photo-error"
                        role="alert"
                    >
                        {ariaInvalid ? errorText : null}
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
                    aria-describedby={`${props.name}-help`}
                    ref={inputRef}
                    {...restProps}
                />
                {ariaInvalid ? (
                    <output
                        id={`${props.name}-error`}
                        role="alert"
                    >
                        {errorText}
                    </output>
                ) : helperText ? (
                    <output id={`${props.name}-help`}>{helperText}</output>
                ) : null}
            </StyledInputTypeText>
        );
    }
);
