import styled from "styled-components";

interface FlexProps {
    justify?: string;
    align?: string;
    direction?: string;
    gap?: string;
    margin?: string;
    padding?: string;
}

export const StyledFlex = styled.div<FlexProps>`
    display: flex;
    justify-content: ${({ justify }) => justify || "center"};
    align-items: ${({ align }) => align || "center"};
    flex-direction: ${({ direction }) => direction || null};
    gap: ${({ gap }) => gap || null};
    margin: ${({ margin }) => margin || null};
    padding: ${({ padding }) => padding || null};
`;
