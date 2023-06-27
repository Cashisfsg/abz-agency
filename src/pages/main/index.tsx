import { Header, Banner, UsersSection, CreateUserSection } from "widgets";
import { StyledMain } from "./ui";

export const MainPage = () => {
    return (
        <>
            <Header />
            <StyledMain>
                <Banner />
                <UsersSection />
                <CreateUserSection />
            </StyledMain>
        </>
    );
};
