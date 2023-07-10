import { useQueryClient, useMutationState } from "@tanstack/react-query";

import { StyledButton } from "shared/ui";

import { useUsersQuery } from "../lib";

interface FetchMoreUsersButtonProps {
    children: React.ReactNode;
}

export const FetchMoreUsersButton: React.FC<FetchMoreUsersButtonProps> = ({
    children,
    ...props
}) => {
    const { isFetching, hasNextPage, fetchNextPage } = useUsersQuery();

    const mutationState = useMutationState();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        fetchNextPage();
    };

    return (
        <StyledButton
            onClick={handleClick}
            disabled={
                !hasNextPage ||
                isFetching ||
                mutationState.at(-1)?.status === "pending"
            }
            {...props}
        >
            {children}
        </StyledButton>
    );
};
