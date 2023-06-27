import styled from "styled-components";
import { StyledContainer } from "shared/ui";

export const StyledSectionContent = styled(StyledContainer).attrs({
    as: "section",
})`
    width: 100%;
    display: grid;
    gap: 50px;
    place-items: center;
`;
