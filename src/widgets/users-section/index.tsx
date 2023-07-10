import { lazy } from "react";

import { SectionContent } from "features";
import { UsersList, FetchMoreUsersButton } from "entities/users";

const FetchUsers = lazy(() => import("entities/users/model/fetch-users"));

export const UsersSection = () => {
    return (
        <SectionContent
            title="Working with GET request"
            content={
                <FetchUsers
                    renderSuccess={data => <UsersList users={data} />}
                />
            }
            button={<FetchMoreUsersButton>Show more</FetchMoreUsersButton>}
        />
    );
};
