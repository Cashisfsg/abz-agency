import { StyledUsersList } from "./styled.users-list";
import { UserCard } from "../user-card";
import { User } from "../../types";

interface UsersListProps {
    users: User[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
    return (
        <StyledUsersList>
            {users.map(user => (
                <UserCard
                    key={user.id}
                    user={user}
                />
            ))}
        </StyledUsersList>
    );
};
