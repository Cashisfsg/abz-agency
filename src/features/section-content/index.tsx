import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

import { StyledTitle } from "shared/ui";

import { StyledSectionContent } from "./ui";

interface SectionContentProps {
    title: string;
    content: React.ReactNode;
}

export const SectionContent: React.FC<SectionContentProps> = ({
    title,
    content
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        fallbackInView: true,
        threshold: 1
    });

    return (
        <StyledSectionContent ref={ref}>
            <StyledTitle>{title}</StyledTitle>
            {inView && (
                <Suspense fallback={<pre>Loading suspense...</pre>}>
                    {content}
                </Suspense>
            )}
        </StyledSectionContent>
    );
};