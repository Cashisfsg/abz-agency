import { forwardRef, useRef, useState, useImperativeHandle } from "react";
import { StyledInputFile } from "./styled.input";

export const InputFile = forwardRef<HTMLInputElement, any>(
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
        const [fileName, setFileName] = useState("Upload your image");

        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

        const loadFile = () => {
            if (inputRef.current) inputRef.current.click();
        };

        const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
            console.log("event", event);
        };

        return (
            <StyledInputFile>
                <input
                    type="file"
                    aria-invalid={ariaInvalid}
                    aria-errormessage={ariaErrorMessage}
                    hidden
                    onChange={onChange}
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
                        "Load"}
                </span>
                {ariaInvalid && <output>{ariaErrorMessage}</output>}
                {value}
            </StyledInputFile>
        );
    }
);
