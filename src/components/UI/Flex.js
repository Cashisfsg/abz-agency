import styled from "styled-components";
import {
    direction,
    height,
    margin,
    padding,
    width,
} from "../../styles/mixin/mixin.styled";

export const Flex = styled.div`
    display: ${({ display }) => display || "flex"};
    justify-content: ${({ justify }) => justify || "center"};
    align-items: ${({ align }) => align || "center"};

    position: ${({ position }) => position || "static"};

    ${height};

    ${padding};
    ${direction};
    ${width};
    ${margin};

    gap: ${({ gap }) => gap || null};

    background: ${({ bg }) => bg || null};
    border-radius: ${({ r }) => r || null};
    box-shadow: ${({ shadow }) => shadow || null};

    font-weight: ${({ fw }) => fw || "normal"};
    font-size: ${({ fs }) => fs || "1rem"};
    line-height: ${({ lh }) => lh || "inherit"};

    color: ${({ color }) => color || "inherit"};
`;

// export default Flex;
