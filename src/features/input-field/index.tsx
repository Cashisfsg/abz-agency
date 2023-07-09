import React from "react";
import { UseFormRegister } from "react-hook-form";

import { StyledInput } from "shared/ui";

import { StyledInputField, StyledInputRadio } from "./ui";

// interface InputFieldProps {
//     type?: "text" | "email" | "tel" | "radio" | "file";
//     label: string;
//     value?: string | number;
//     "aria-invalid"?: boolean;
//     "aria-errormessage"?: string | undefined;
//     helperText?: string;
// }

type InputFieldProps =
    | {
          type?: "text" | "email" | "tel";
          label: string;
          value?: never;
          "aria-invalid": boolean;
          "aria-errormessage": string | undefined;
          helperText?: string;
      }
    | {
          type: "radio";
          label: string;
          value: string | number;
          "aria-invalid": undefined;
          "aria-errormessage": never;
          helperText: never;
      };

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
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
        if (type === "radio")
            return (
                <StyledInputRadio>
                    <input
                        type={type}
                        value={value}
                        ref={ref}
                        {...props}
                    />
                    <span>{label}</span>
                </StyledInputRadio>
            );

        return (
            <StyledInputField>
                <span>{label}</span>
                <StyledInput
                    type={type || "text"}
                    placeholder={label}
                    aria-invalid={ariaInvalid}
                    aria-errormessage={ariaErrorMessage}
                    ref={ref}
                    {...props}
                />
                {ariaErrorMessage ? (
                    <output>{ariaErrorMessage}</output>
                ) : (
                    helperText && <output>{helperText}</output>
                )}
            </StyledInputField>
        );
    }
);
