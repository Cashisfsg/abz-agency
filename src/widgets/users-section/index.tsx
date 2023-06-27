import { lazy } from "react";
import { SectionContent, ShowMoreUsersButton } from "features";

const UsersList = lazy(() => import("entities/users/ui/users-list/users-list"));
// const UsersList = lazy(() => import("entities/users"));
// import UsersList from "entities/users/ui/users-list/users-list";

export const UsersSection = () => {
    return (
        <SectionContent
            title="Working with GET request"
            content={<UsersList />}
            button={<ShowMoreUsersButton>Show more</ShowMoreUsersButton>}
        />
    );
};
