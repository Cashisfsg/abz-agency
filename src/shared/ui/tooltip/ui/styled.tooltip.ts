import styled from "styled-components";

export const StyledTooltip = styled.span`
    position: fixed;
    top: 50%;
    left: 50%;
    width: max-content;
    max-width: calc(100% - 4rem);
    padding: 0.25rem 1rem;

    color: #fff;
    text-overflow: ellipsis;

    overflow: hidden;

    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.87);

    &[aria-hidden="false"] {
        animation: fadeout 0.3s ease-in;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        /* opacity: 1; */
    }

    &[aria-hidden="true"] {
        animation: appearance 0.3s ease-out;
        /* animation-delay: 0.5s; */
        animation-fill-mode: forwards;
        /* opacity: 0; */
    }

    opacity: 0;

    @keyframes appearance {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes fadeout {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media (hover: hover) {
        &:hover {
            &::after {
                /* visibility: "hidden";
                opacity: 0; */
                animation: appearance 1s ease-in;
                /* animation-direction: reverse; */
            }
        }
    }
`;
