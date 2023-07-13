import { createGlobalStyle } from "styled-components";
import { ThemeType } from "styles/theme/defaultTheme";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
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
