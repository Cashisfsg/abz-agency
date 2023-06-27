import React, { useRef } from "react";

import { Flex } from "./UI/Flex";
import { Image as UserPhoto } from "./UI/Image";
import Text from "./UI/Text";
import Tooltip from "./Tooltip";

import PhotoCover from "../assets/photo-cover.svg";

const UserCard = ({ user }) => {
    const emailRef = useRef(null);

    return (
        <Flex column bg={"#FFFFFF"} p={"20px"} gap={"20px"} r={"10px"}>
            <UserPhoto
                src={user?.photo || PhotoCover}
                alt={user?.name}
                h={"70px"}
                w={"70px"}
                r={"50%"}
            />
            <Text overflow-hidden nowrap>
                {user?.name}
            </Text>
            <Flex display={"block"} w={"100%"}>
                <Text overflow-hidden nowrap>
                    {user?.position}
                </Text>
                <Text
                    overflow-hidden
                    nowrap
                    ref={emailRef}
                    style={{
                        position: "relative",
                        width: "max-content",
                        maxWidth: "100%",
                        margin: "0 auto",
                    }}
                >
                    {user?.email}
                </Text>
                <Tooltip reference={emailRef} />
                <Text overflow-hidden nowrap>
                    {user?.phone}
                </Text>
            </Flex>
        </Flex>
    );
};

export default UserCard;
