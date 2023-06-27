import React from "react";

import Flex from "./Flex";
import Image from "./Image";

import SpinnerImage from "../../icons/spinner.png";

const Spinner = () => {
    return (
        <Flex w={"100%"} h={"100%"}>
            <Image src={SpinnerImage} w={"12px"} h={"12px"} rotate />
        </Flex>
    );
};

export default Spinner;
