import styled from "styled-components";

export const StyledInputRadio = styled.label`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    & > input[type="radio"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        position: relative;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;

        border: 1px solid #d0cfcf;
        transition: 0.3s all ease-in-out;
        outline: none;
        cursor: pointer;

        &:checked {
            /* height: 1.25rem;
            width: 1.25rem; */
            /* border-radius: 50%; */
            border: 1px solid #00bdd3;
        }

        &:checked::before {
            content: "";
            width: 0.625rem;
            height: 0.625rem;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background-color: #00bdd3;
        }
    }
`;
