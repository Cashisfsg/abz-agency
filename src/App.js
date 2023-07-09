import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/styled/GlobalStyles";
import { defaultTheme } from "./styles/theme/defaultTheme";

import { MainPage } from "pages";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
