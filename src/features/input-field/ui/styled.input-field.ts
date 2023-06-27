import styled from "styled-components";

export const StyledInputField = styled.label`
    width: 100%;

    position: relative;

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
