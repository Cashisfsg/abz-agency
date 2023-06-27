import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1170px;
    min-width: 360px;
    padding-inline: 60px;
    margin-inline: auto;

    @media (max-width: 768px) {
        padding-inline: 2rem;
    }

    @media (max-width: 360px) {
        padding-inline: 1rem;
    }
`;
