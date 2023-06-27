import React from "react";
import {
    StyledBanner,
    BannerContent,
} from "../components/styles/Banner.styled";

import Title from "../components/UI/Title";
import Text from "../components/UI/Text";
import Button from "../components/UI/Button";

import { TestComponent } from "../components/UI/TestComponent";

const Banner = () => {
    return (
        <StyledBanner>
            <TestComponent m-1 mt-2>
                Test component
            </TestComponent>
            <BannerContent>
                <Title mb={"21px"}>
                    Test assignment for front-end developer
                </Title>
                <Text mb={"32px"}>
                    What defines a good front-end developer is one that has
                    skilled knowledge of HTML, CSS, JS with a vast understanding
                    of User design thinking as they'll be building web
                    interfaces with accessibility in mind. They should also be
                    excited to learn, as the world of Front-End Development
                    keeps evolving.
                </Text>
                <Button>Sign Up</Button>
            </BannerContent>
        </StyledBanner>
    );
};

export default Banner;
