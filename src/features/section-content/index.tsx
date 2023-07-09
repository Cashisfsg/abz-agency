import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

import { StyledTitle } from "shared/ui";

import { StyledSectionContent } from "./ui";

interface SectionContentProps {
    title: string;
    content: React.ReactNode;
    button: React.ReactElement;
}

export const SectionContent: React.FC<SectionContentProps> = ({
    title,
    content,
    button
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        fallbackInView: true
        // threshold: 0,
    });

    return (
        <StyledSectionContent ref={ref}>
            {inView && (
                <Suspense fallback={<pre>Loading...</pre>}>
                    <StyledTitle>{title}</StyledTitle>
                    {content}
                    {button}
                </Suspense>
            )}
        </StyledSectionContent>
    );
};
