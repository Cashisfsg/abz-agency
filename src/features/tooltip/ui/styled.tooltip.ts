import styled from "styled-components";

export const StyledTooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const StyledTooltip = styled.label`
    position: absolute;
    width: max-content;
    padding: 0.25rem 1rem;

    color: #fff;

    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.87);
    animation: appearance 0.3s ease-in;

    @keyframes appearance {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
