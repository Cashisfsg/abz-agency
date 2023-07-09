import { StyledUsersList } from "./styled.users-list";
import { UserCard } from "../user-card";
import { useUsersQuery } from "../../lib";

export const UsersList = () => {
    const { data, isFetched } = useUsersQuery();

    return (
        <>
            {isFetched && data && (
                <StyledUsersList>
                    {data.pages &&
                        data.pages.length &&
                        data.pages
                            .flatMap(data => data?.users)
                            .sort(
                                (a, b) =>
                                    b.registration_timestamp -
                                    a.registration_timestamp
                            )
                            .map(user => (
                                <UserCard
                                    key={user.id}
                                    user={user}
                                />
                            ))}
                </StyledUsersList>
            )}
        </>
    );
};

export default UsersList;
