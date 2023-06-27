import { StyledBanner, StyledBannerContent } from "./ui";
import { StyledTitle, StyledText, StyledButton } from "shared/ui";

export const Banner = () => {
    return (
        <StyledBanner>
            <StyledBannerContent>
                <StyledTitle>
                    Test assignment for front-end developer
                </StyledTitle>
                <StyledText>
                    What defines a good front-end developer is one that has
                    skilled knowledge of HTML, CSS, JS with a vast understanding
                    of User design thinking as they'll be building web
                    interfaces with accessibility in mind. They should also be
                    excited to learn, as the world of Front-End Development
                    keeps evolving.
                </StyledText>
                <StyledButton>Sign up</StyledButton>
            </StyledBannerContent>
        </StyledBanner>
    );
};
