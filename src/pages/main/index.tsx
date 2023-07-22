import {
    Header,
    Banner,
    UsersSection,
    CreateUserSection,
    SuccessRegistrationSection
} from "widgets";

import { StyledMain } from "./ui";

export const MainPage = () => {
    return (
        <>
            <Header />
            <StyledMain>
                <Banner />
                <UsersSection />
                <CreateUserSection />
                <SuccessRegistrationSection />
            </StyledMain>
        </>
    );
};
