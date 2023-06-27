import React from "react";

import { StyledButton } from "shared/ui";
import { useUsersQuery } from "../../entities/users/model/use-users-query";

export const ShowMoreUsersButton = ({
    children,
    ...props
}: {
    children: React.ReactNode;
}) => {
    const { isFetching, hasNextPage, fetchNextPage } = useUsersQuery();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (
        event
    ) => {
        fetchNextPage();
    };

    return (
        <StyledButton
            onClick={handleClick}
            disabled={!hasNextPage || isFetching}
            {...props}
        >
            {children}
        </StyledButton>
    );
};
