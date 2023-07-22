import { useRef, useImperativeHandle, forwardRef } from "react";

import {
    StyledInputTypeText,
    StyledInputTypeRadio,
    StyledInputTypeFile
} from "shared/ui";

type InputTypeTextProps = JSX.IntrinsicElements["input"] & {
    type?: "text" | "email" | "tel";
    label: string;
    value?: never;
    "aria-invalid": boolean;
    errorText?: string;
    helperText?: string;
};

type InputTypeRadioProps = JSX.IntrinsicElements["input"] & {
    type: "radio";
    label: string;
    value: string | number;
    "aria-invalid"?: never;
    errorText?: never;
    helperText?: never;
};

type InputTypeFileProps = JSX.IntrinsicElements["input"] & {
    type: "file";
    label?: never;
    value?: never;
    "aria-invalid": boolean;
    errorText?: string;
    helperText?: never;
};

type PolymorphicInputProps =
    | InputTypeTextProps
    | InputTypeRadioProps
    | InputTypeFileProps;

type PolymorphicInput = {
    (
        props: InputTypeTextProps,
        ref: React.ForwardedRef<HTMLInputElement>
    ): React.FunctionComponentElement<InputTypeTextProps>;
    (
        props: InputTypeRadioProps,
        ref: React.ForwardedRef<HTMLInputElement>
    ): React.FunctionComponentElement<InputTypeRadioProps>;
    (
        props: InputTypeFileProps,
        ref: React.ForwardedRef<HTMLInputElement>
    ): React.FunctionComponentElement<InputTypeFileProps>;
};

export const Input: PolymorphicInput = forwardRef<
    HTMLInputElement,
    PolymorphicInputProps
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
                    {...props}
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
) as PolymorphicInput;
