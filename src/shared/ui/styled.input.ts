import styled from "styled-components";

export const StyledInput = styled.input`
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
`;
