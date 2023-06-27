import React, { useRef } from "react";
import styled from "styled-components";

interface TooltipProps {
    children: React.ReactElement<HTMLAnchorElement>;
}

const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
    // const childrenRef = useRef<HTMLAnchorElement>(null);
    const tooltipRef = useRef<HTMLLabelElement>(null);

    const handleMouseEvent =
        // debounce(
        (event) => {
            if (tooltipRef.current) {
                const viewportWidth = window.innerWidth;
                console.log(viewportWidth);

                const tooltipRect = tooltipRef.current.getBoundingClientRect();

                console.log(
                    viewportWidth - 32 - (tooltipRect.right - tooltipRect.left)
                );
                console.log("Right", tooltipRect.right);

                if (
                    event.clientX +
                        (tooltipRect.right - tooltipRect.left) -
                        16 >
                    viewportWidth - 32
                ) {
                    tooltipRef.current.style.left = `calc(${
                        viewportWidth -
                        32 -
                        (tooltipRect.right - tooltipRect.left)
                    }px - 1rem)`;
                } else {
                    tooltipRef.current.style.left = `calc(${event.clientX}px - 1rem)`;
                }

                tooltipRef.current.style.top = `calc(${event.clientY}px + 1.5rem)`;
            }
        };
    // , 50);

    // let anchorText = "";

    // try {
    const anchorElement = React.Children.only(children);

    if (React.isValidElement(anchorElement)) {
        const { id, children } = anchorElement.props;
        let anchorText = String(children);

        console.log(anchorText);

        return (
            <div>
                {React.cloneElement(
                    anchorElement as React.ReactElement<HTMLAnchorElement> &
                        React.ReactElement,
                    {
                        onMouseOver: () => {
                            if (tooltipRef.current)
                                tooltipRef.current.style.display = "block";
                        },
                        onMouseMove: handleMouseEvent,
                        onMouseLeave: () => {
                            if (tooltipRef.current)
                                tooltipRef.current.style.display = "none";
                        },
                    }
                )}
                {/* {anchorElement} */}
                <StyledTooltip htmlFor={id} ref={tooltipRef}>
                    {anchorText}
                </StyledTooltip>
            </div>
        );
    }
    // } catch (error) {
    //     return <></>;
    // }
};

const StyledTooltip = styled.label`
    /* display: block; */
    position: fixed;
    width: max-content;
    text-align: center;
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
