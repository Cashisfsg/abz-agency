import styled from "styled-components";
import { StyledCard } from "shared/ui";

export const StyledUserCard = styled(StyledCard)`
    & *:not(img, a) {
        display: block;
        width: 100%;
        overflow: hidden;
        text-align: center;
    }

    & > div {
        font-size: 0;
    }

    & a {
        display: inline-block;
        width: max-content;
        max-width: 100%;

        overflow-x: hidden;

        text-decoration: none;
        color: inherit;
    }

    & p,
    a {
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-size: 1rem;
    }
`;
