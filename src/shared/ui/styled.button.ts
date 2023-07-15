import styled from "styled-components";
import { ThemeType } from "app/styles/styled/default-theme";

export const StyledButton = styled.button<{ theme: ThemeType }>`
    min-width: 100px;
    width: max-content;
    padding: 4px 18px;

    font-family: ${({ theme }) => theme.font.primary};
    font-size: 1rem;

    background-color: ${({ theme }) => theme.colors.yellow};

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
