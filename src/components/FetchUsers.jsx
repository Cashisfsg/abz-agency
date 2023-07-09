import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import SkeletonCard from "./SkeletonCard";
import UserCard from "./UserCard";
import Button from "./UI/Button";
import { UsersContainer } from "./styles/Users.styled";

import { fetchUsers } from "../services/users.service";

const Users = () => {
    const { data, status, isFetching, error, hasNextPage, fetchNextPage } =
        useInfiniteQuery(
            ["users", "infinite"],
            ({ pageParam = { page: 1, count: 6 } }) => fetchUsers(pageParam),
            {
                refetchOnWindowFocus: false,
                getNextPageParam: lastPage => {
                    return lastPage.page < lastPage.total_pages
                        ? { page: lastPage.page + 1, count: lastPage.count }
                        : undefined;
                }
            }
        );

    return (
        <>
            {status !== "loading" && status !== "error" && (
                <UsersContainer>
                    {data.pages
                        .flatMap(data => data?.users)
                        .map(user => (
                            <UserCard
                                key={user?.id}
                                user={user}
                            />
                        ))}
                </UsersContainer>
            )}
            {isFetching && (
                <UsersContainer>
                    {[...Array(6)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </UsersContainer>
            )}
            <Button
                onClick={fetchNextPage}
                disabled={!hasNextPage || isFetching}
            >
                Show more
            </Button>
            {status === "error" && <pre>{JSON.stringify(error.message)}</pre>}
        </>
    );
};

export default Users;
