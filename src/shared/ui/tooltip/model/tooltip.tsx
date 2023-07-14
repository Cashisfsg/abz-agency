import React, { useRef } from "react";
import { StyledTooltip } from "../ui";
import { Portal } from "shared/lib";

interface TooltipProps {
    children: React.ReactElement<HTMLAnchorElement>;
}

export const Tooltip: React.FC<TooltipProps> = ({ children }) => {
    const tooltipRef = useRef<HTMLSpanElement>(null);

    try {
        const anchorElement = React.Children.only(children);

        if (!React.isValidElement(anchorElement)) return;

        const props = anchorElement.props;
        const anchorText = String(props.children);

        const handleMouseEvent = (
            event: React.MouseEvent<HTMLAnchorElement>
        ) => {
            if (tooltipRef.current) {
                const viewportWidth = window.innerWidth;

                const tooltipElement = tooltipRef.current;

                tooltipElement.style.display = "inline-block";

                const tooltipRect = tooltipElement.getBoundingClientRect();
                const anchorRect = event.currentTarget.getBoundingClientRect();

                tooltipElement.setAttribute("aria-hidden", "false");

                if (
                    event.clientX +
                        (tooltipRect.right - tooltipRect.left) -
                        16 >
                    viewportWidth - 32
                ) {
                    console.log("tooltip");

                    tooltipElement.style.left = `calc(${
                        viewportWidth -
                        32 -
                        (tooltipRect.right - tooltipRect.left)
                    }px - 1rem)`;
                } else {
                    tooltipElement.style.left = `calc(${event.clientX}px - 1rem)`;
                }

                tooltipElement.style.top = `calc(${anchorRect.bottom}px + 1rem)`;
            }
        };

        return (
            <>
                {React.cloneElement(
                    anchorElement as React.ReactElement<HTMLLabelElement> &
                        React.ReactElement,
                    {
                        onMouseOver: handleMouseEvent,
                        onMouseLeave: () => {
                            if (tooltipRef.current) {
                                tooltipRef.current.setAttribute(
                                    "aria-hidden",
                                    "true"
                                );
                            }
                        }
                    }
                )}
                <Portal>
                    <StyledTooltip
                        aria-hidden="true"
                        role="tooltip"
                        onAnimationEnd={() => {
                            if (tooltipRef.current) {
                                const isAriaHidden =
                                    tooltipRef.current.getAttribute(
                                        "aria-hidden"
                                    );

                                if (isAriaHidden === "true") {
                                    tooltipRef.current.style.display = "none";
                                }
                            }
                        }}
                        ref={tooltipRef}
                    >
                        {anchorText}
                    </StyledTooltip>
                </Portal>
            </>
        );
    } catch (error) {
        return <>{children}</>;
    }
};
