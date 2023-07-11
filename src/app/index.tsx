import "./index.css";

import { StyledThemeProvider, ReactQueryProvider } from "./providers";
import { MainPage } from "pages";

const App = () => {
    return (
        <ReactQueryProvider>
            <StyledThemeProvider>
                <MainPage />
            </StyledThemeProvider>
        </ReactQueryProvider>
    );
};

export default App;
