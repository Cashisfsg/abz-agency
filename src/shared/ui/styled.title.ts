import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-size: 2.5rem;
    line-height: 1;
    margin: ${({ margin }: { margin?: string }) => margin || null};
    text-align: center;
`;
