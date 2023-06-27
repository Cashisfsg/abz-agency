import React from "react";

import { Flex } from "./UI/Flex";
import { Image } from "./UI/Image";
import Spinner from "./Spinner";

import DefaultPhoto from "../assets/photo-cover.svg";

const SkeletonCard = () => {
    return (
        <Flex
            column
            h={"254px"}
            w={"100%"}
            p={"20px"}
            bg={"#FFFFFF"}
            r={"16px"}
        >
            <Image src={DefaultPhoto} h={"70px"} w={"70px"} />
            <Spinner />
        </Flex>
    );
};

export default SkeletonCard;
