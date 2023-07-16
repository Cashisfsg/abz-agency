import { useRef, useLayoutEffect } from "react";
import { useMutationState } from "@tanstack/react-query";

import { SectionContent } from "features";
import { SuccessRegistration } from "shared/ui";

export const SuccessRegistrationSection = () => {
    const mutationState = useMutationState();

    const status = mutationState.at(-1)?.status;

    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        if (imageRef.current) {
            imageRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        }
    }, [status]);

    return (
        <>
            {status === "success" ? (
                <>
                    <SectionContent
                        title="User successfully registered"
                        content={<SuccessRegistration ref={imageRef} />}
                        isIntersectingEnabled={false}
                    />
                </>
            ) : null}
        </>
    );
};
