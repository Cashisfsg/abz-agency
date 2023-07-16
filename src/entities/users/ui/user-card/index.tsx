import { useRef, memo } from "react";

import { Tooltip } from "shared/ui/tooltip";

import { User } from "../../types";
import { StyledUserCard } from "./styled.user-card";

import ProfilePhoto from "../../assets/photo-cover.svg";

interface UserCardProps {
    user: User;
}

export const UserCard: React.FC<UserCardProps> = memo(({ user }) => {
    const photoRef = useRef<HTMLImageElement>(null);

    const handleImageError = () => {
        if (photoRef.current) {
            photoRef.current.src = ProfilePhoto;
        }
    };

    return (
        <StyledUserCard>
            <img
                src={user.photo}
                alt={user.name}
                loading="lazy"
                onError={handleImageError}
                ref={photoRef}
            />
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
        </StyledUserCard>
    );
});
