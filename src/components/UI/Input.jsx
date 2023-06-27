import React from "react";
import styled from "styled-components";

const Input = React.forwardRef(
    (
        {
            type,
            id,
            helperMessage,
            errorMessage,
            placeholder,
            position,
            ...props
        },
        ref
    ) => {
        // if (type === "radio") {
        //     return (
        //         <StyledInputTypeRadio>
        //             <input
        //                 type={type}
        //                 id={id}
        //                 value={position.id}
        //                 ref={ref}
        //                 {...props}
        //             />
        //             {position?.name}
        //         </StyledInputTypeRadio>
        //     );
        // }

        return (
            <StyledInput>
                <input
                    type={type}
                    id={id}
                    ref={ref}
                    placeholder={placeholder}
                    {...props}
                />
                <label htmlFor={id}>{placeholder}</label>
                {errorMessage ? (
                    <output>{errorMessage}</output>
                ) : (
                    helperMessage && <output>{helperMessage}</output>
                )}
            </StyledInput>
        );
    }
);

export default Input;

const StyledInput = styled.div`
    height: 54px;
    width: 100%;
    position: relative;
    font-size: 16px;
    line-height: 26px;

    & > input {
        height: 100%;
        width: 100%;
        padding: 14px 16px;
        color: rgba(0, 0, 0, 0.87);
        border: 1px solid #d0cfcf;
        border-radius: 4px;
        outline: none;
        background: ${({ theme }) => theme.colors.body};

        &::placeholder {
            opacity: 0;
        }

        &:not(:placeholder-shown) ~ label,
        &:focus ~ label {
            top: 0;
            left: 12px;
            padding: 0 4px;
            font-size: 12px;
            font-weight: 500;
            line-height: 14px;
            background: ${({ theme }) => theme.colors.body};
        }

        &[aria-invalid="true"] {
            border-color: #cb3d40;

            & ~ label,
            & ~ output {
                color: #cb3d40;
            }
        }
    }

    & > label {
        position: absolute;
        top: 50%;
        left: 16px;
        color: #7e7e7e;
        text-transform: capitalize;
        transform: translateY(-50%);
        transition: all 0.3s ease-in-out;
    }

    & > output {
        position: absolute;
        font-size: 12px;
        line-height: 14px;
        color: #7e7e7e;
        left: 16px;
        bottom: -4px;
        transform: translateY(100%);
    }
`;
