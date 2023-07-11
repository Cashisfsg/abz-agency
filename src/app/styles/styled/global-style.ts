import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    
   

        font-family: ${({ theme }) => theme.font.primary};
        line-height: 1.625;
        color: ${({ theme }) => theme.colors.text};

        background-color: ${({ theme }) => theme.colors.body};
    }
`;
