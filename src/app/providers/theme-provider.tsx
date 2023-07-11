import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "app/styles";

import { defaultTheme } from "styles/theme/defaultTheme";

export const StyledThemeProvider = ({
    children,
    ...props
}: PropsWithChildren) => {
    return (
        <ThemeProvider
            theme={defaultTheme}
            {...props}
        >
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
