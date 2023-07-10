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

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = event => {
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
