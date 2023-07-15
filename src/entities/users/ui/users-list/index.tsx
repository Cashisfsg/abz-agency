import { StyledUsersList } from "./styled.users-list";
import { UserCard } from "../user-card";
import { FetchMoreUsersButton } from "../../model";
// import SkeletonCard from "components/SkeletonCard";

import { SkeletonCard } from "../skeleton-card";

import { User } from "../../types";

interface UsersListProps {
    users: User[] | undefined[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
    return (
        <>
            <StyledUsersList>
                {users.map(user => {
                    if (user !== undefined) {
                        return (
                            <UserCard
                                key={user.id}
                                user={user}
                            />
                        );
                    } else {
                        return <SkeletonCard />;
                    }
                })}
            </StyledUsersList>

            <FetchMoreUsersButton>Show more</FetchMoreUsersButton>
        </>
    );
};
