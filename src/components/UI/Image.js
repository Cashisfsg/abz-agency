import styled from "styled-components";
import { height, width } from "../../styles/mixin/mixin.styled";

export const Image = styled.img.attrs(({ alt }) => ({
    alt: alt || "",
}))`
    ${height};
    ${width};
    border-radius: ${({ r }) => r || null};
    animation: ${({ rotation }) =>
        rotation ? "rotation 1s linear infinite" : null};

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
