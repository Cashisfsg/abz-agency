import React from "react";

import { User } from "../../types";
import { StyledCard } from "./styled.card";
import { Tooltip } from "features/tooltip";

interface UserCardProps {
    user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <StyledCard>
            <img src={user.photo} alt={user.name} loading="lazy" />
            <p>{user.name}</p>
            <div>
                <p>{user.position}</p>
                <Tooltip>
                    <a
                        id={user.id.toString()}
                        href={`mailto:${user.email}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {user.email}
                    </a>
                </Tooltip>
                <p>{user.phone}</p>
            </div>
        </StyledCard>
    );
};
