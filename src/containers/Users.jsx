import React from "react";

import FetchUsers from "../components/FetchUsers";

import Container from "../components/Container";
import { Flex } from "../components/UI/Flex";
import Title from "../components/UI/Title";

const Users = () => {
    return (
        <Container>
            <Flex column gap={"50px"}>
                <Title>Working with GET request</Title>
                <FetchUsers />
            </Flex>
        </Container>
    );
};

export default Users;
