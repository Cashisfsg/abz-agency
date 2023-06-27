import React from "react";
import { useInView } from "react-intersection-observer";

const Observer = ({ children, ...props }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        fallbackInView: true,
        // threshold: 0,
    });

    return (
        <section style={{ width: "100%" }} ref={ref} {...props}>
            {inView && <>{children}</>}
        </section>
    );
};

export default Observer;
