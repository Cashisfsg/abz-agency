import styled from "styled-components";

export const StyledInputRadio = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    & > input {
        appearance: none;

        position: relative;
        border-radius: 50%;
        width: 20px;
        height: 20px;

        border: 1px solid #d0cfcf;
        transition: 0.2s all linear;
        outline: none;
        cursor: pointer;

        &:checked {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 1px solid #00bdd3;
        }

        &:checked::before {
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background-color: #00bdd3;
        }
    }
`;
