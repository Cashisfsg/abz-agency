import React from "react";
import {
    StyledHeader,
    Logo,
    HeaderContent,
    Navigation,
} from "../components/styles/Header.styled";
import Container from "../components/Container";
import Button from "../components/UI/Button";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderContent>
                    <Logo />
                    <Navigation>
                        <Button>Users</Button>
                        <Button>Sign Up</Button>
                    </Navigation>
                </HeaderContent>
            </Container>
        </StyledHeader>
    );
};

export default Header;
