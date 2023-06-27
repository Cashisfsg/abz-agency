import React from "react";

import { Flex } from "./UI/Flex";
import { Image } from "./UI/Image";

import SpinnerURL from "../assets/spinner.svg";

const Spinner = () => {
    return (
        <Flex h={"100%"} w={"100%"}>
            <Image
                src={SpinnerURL}
                alt="spinner"
                h={"48px"}
                w={"48px"}
                rotation
            />
        </Flex>
    );
};

export default Spinner;
