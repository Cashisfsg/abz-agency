import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

const Tooltip = ({ reference, ...props }) => {
    const labelRef = useRef(null);

    useEffect(() => {
        if (!reference && !reference?.current) return;

        reference.current.addEventListener("mouseover", () => {
            labelRef.current.style.display = "block";
            labelRef.current.innerText = reference?.current?.innerText;
        });

        reference.current.addEventListener("mouseleave", () => {
            labelRef.current.style.display = "none";
        });

        reference.current.addEventListener("mousemove", (e) => {
            labelRef.current.style.left = `calc(${e.clientX}px - 1rem)`;
            labelRef.current.style.top = `calc(${e.clientY}px + 1rem)`;
        });
    }, [reference]);

    return (
        <StyledTooltip ref={labelRef} {...props}>
            {/* {reference && reference?.current && reference?.current?.innerText} */}
        </StyledTooltip>
    );
};

export default Tooltip;

const StyledTooltip = styled.label`
    position: fixed;
    color: white;
    background-color: rgba(0, 0, 0, 0.87);
    padding: 0.25rem 1rem;
    line-height: 1.625rem;
    border-radius: 4px;
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
