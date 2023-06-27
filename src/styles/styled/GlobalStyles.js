import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        max-width: 100dvw;
        min-height: 100dvh;
    }

    body {
        min-height: 100%;
        min-width: 100%;
        
        font-family: ${({ theme }) => theme.font.primary};
        line-height: 1.625;
        color: ${({ theme }) => theme.colors.text};

        background-color: ${({ theme }) => theme.colors.body};
    }

    #root {
        min-height: 100%;
        min-width: 100%;
    }
`;

export default GlobalStyle;
