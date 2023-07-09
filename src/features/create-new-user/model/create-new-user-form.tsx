import { useUsersQuery } from "entities/users";
import { StyledButton } from "shared/ui";

export const ShowMoreUsersButton = ({
    children,
    ...props
}: {
    children: React.ReactNode;
}) => {
    const { isFetching, hasNextPage, fetchNextPage } = useUsersQuery();

    const handleClick: React.MouseEventHandler<
        HTMLButtonElement
    > = async event => {
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
