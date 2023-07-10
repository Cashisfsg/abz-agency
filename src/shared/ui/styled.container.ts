import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1170px;
    min-width: 360px;

    margin-inline: auto;
    padding-inline: calc(4rem - min(4rem, (100dvw - 1170px) / 2));

    @media (max-width: 1170px) {
        padding-inline: clamp(2rem, -12rem + 22vw, 4rem);
    }

    @media (max-width: 1024px) {
        padding-inline: clamp(1rem, -2rem + 6.25vw, 2rem);
    }
`;
