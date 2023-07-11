import React from "react";

import { Flex } from "./Flex";
import { GridLoader } from "react-spinners";

const Preloader = () => {
    return (
        <Flex
            w={"100%"}
            h={"100%"}
            align="center"
            style={{ height: "100%" }}
        >
            <GridLoader height="100%" />
        </Flex>
    );
};

export default Preloader;
