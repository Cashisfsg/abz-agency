import styled from "styled-components";

export const StyledButton = styled.button`
    min-width: 100px;
    width: max-content;
    padding: 4px 18px;

    font-family: Nunito;
    font-size: 1rem;
    line-height: 1.625;

    color: rgba(0, 0, 0, 0.87);
    background-color: #f4e041;

    border-radius: 80px;

    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

    border: none;
    /* outline: none; */
    cursor: pointer;

    :hover {
        background-color: #ffe302;
    }

    :disabled {
        color: rgba(255, 255, 255, 0.87);
        background-color: #b4b4b4;
    }
`;
