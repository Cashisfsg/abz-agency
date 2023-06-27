import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/styled/GlobalStyles";
import { defaultTheme } from "./styles/theme/defaultTheme";

// import { Flex as Main } from "./components/UI/Flex";
// import Header from "./containers/Header";
// import Banner from "./containers/Banner";
// import Preloader from "./components/UI/Preloader";

import { MainPage } from "pages";

import Observer from "./components/Observer";
const Users = React.lazy(() => import("./containers/Users"));
const AddUser = React.lazy(() => import("./containers/AddUser"));

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <MainPage />
            {/* <Header />
            <Main as={"main"} column gap={"140px"} pb={"100px"}>
                <Banner />
                <Observer>
                    <Suspense fallback={<Preloader />}>
                        <Users />
                    </Suspense>
                </Observer>
                <Observer>
                    <Suspense fallback={<Preloader />}>
                        <AddUser />
                    </Suspense>
                </Observer>
            </Main> */}
        </ThemeProvider>
    );
}

export default App;
