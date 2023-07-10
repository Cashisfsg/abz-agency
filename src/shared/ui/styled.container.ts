import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1170px;
    min-width: 360px;
    padding-inline: 0px;
    margin-inline: auto;

    @media (max-width: 1170px) {
        padding-inline: 4rem;
        /* padding-inline: clamp(2rem, 0.75rem + 4.5dvw, 4rem); */
    }

    @media (max-width: 1024px) {
        padding-inline: 2rem;
    }

    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
`;
