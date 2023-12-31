import styled from "styled-components";
import { StyledContainer } from "shared/ui";

export const StyledHeader = styled.header`
    min-height: 60px;
    height: 60px;
    width: 100%;

    padding-top: 0.75rem;
    padding-bottom: 0.75rem;

    display: flex;
    align-items: center;

    background-color: #fff;
`;

export const StyledHeaderContent = styled(StyledContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* gap: 2rem; */
`;
