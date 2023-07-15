import styled from "styled-components";
import { ThemeType } from "app/styles/styled/default-theme";

export const StyledInputTypeText = styled.label`
    width: 100%;

    position: relative;

    & > input {
        width: 100%;
        padding: 0.875rem 1rem;

        font-family: Nunito;
        font-size: 1rem;
        line-height: 1.625rem;

        background-color: transparent;
        border-radius: 0.25rem;
        border: 1px solid #d0cfcf;

        outline: none;

        ::placeholder {
            color: #7e7e7e;
            opacity: 0;
        }
    }

    & > *:not(input) {
        position: absolute;
    }

    & > span {
        top: 50%;
        left: 1rem;

        color: #7e7e7e;

        transform: translateY(-50%);
        transition: all 0.3s ease-in-out;

        ::first-letter {
            text-transform: uppercase;
        }
    }

    :has(input:focus) span,
    :has(input:not(:placeholder-shown)) span {
        top: 0;
        left: 0.875rem;

        padding: 0.125rem 0.25rem;

        font-size: 0.75rem;
        font-weight: 500;
        line-height: 0.875rem;

        background-color: #f8f8f8;
    }

    & > input[aria-invalid="true"] {
        border: 2px solid #cb3d40;
    }

    :has(input[aria-invalid="true"]) span {
        color: #cb3d40;
    }

    :has(output) output {
        top: calc(100% + 0.25rem);
        left: 1rem;

        /* font-family: Asap; */

        font-size: 0.75rem;

        ::first-letter {
            text-transform: uppercase;
        }
    }

    :has(input[aria-invalid="true"]) output {
        color: #cb3d40;
    }
`;

export const StyledInputTypeRadio = styled.label<{ theme: ThemeType }>`
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
            border: ${({ theme }) => `1px solid ${theme.colors.blue}`};
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
            background-color: ${({ theme }) => theme.colors.blue};
        }
    }
`;

export const StyledInputTypeFile = styled.label`
    position: relative;
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    /* grid-template-rows: 54px; */

    width: 100%;
    max-width: 100%;
    height: 54px;

    cursor: pointer;

    & > button {
        padding: 0.875rem;

        font-family: Nunito;
        font-size: 1rem;
        line-height: 1.625;

        color: rgba(0, 0, 0, 0.87);
        background-color: transparent;

        border-radius: 0.25rem 0px 0px 0.25rem;
        border: 1px solid rgba(0, 0, 0, 0.87);

        cursor: pointer;

        ::first-letter {
            text-transform: uppercase;
        }
    }

    & > span {
        display: inline-block;

        width: 100%;
        padding: 0.875rem 1rem;

        color: #7e7e7e;
        border-right: 1px solid #d0cfcf;
        border-top: 1px solid #d0cfcf;
        border-bottom: 1px solid #d0cfcf;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    :has(input[type="file"][aria-invalid="true"]) button {
        border: 2px solid #cb3d40;
    }

    :has(input[type="file"][aria-invalid="true"]) span {
        border-right: 2px solid #cb3d40;
        border-top: 2px solid #cb3d40;
        border-bottom: 2px solid #cb3d40;
    }

    :has(output) output {
        position: absolute;
        top: calc(100% + 0.25rem);
        left: 1rem;

        font-size: 0.75rem;
        color: #cb3d40;

        ::first-letter {
            text-transform: uppercase;
        }
    }
`;
