import { StyledFlex, StyledButton, Logo } from "shared/ui";

import { StyledHeader, StyledHeaderContent } from "./ui";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderContent>
                <Logo />
                <StyledFlex gap="10px">
                    <StyledButton>Users</StyledButton>
                    <StyledButton>Sign up</StyledButton>
                </StyledFlex>
            </StyledHeaderContent>
        </StyledHeader>
    );
};
