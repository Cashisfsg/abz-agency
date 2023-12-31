import { lazy } from "react";

import { SectionContent } from "features";
import { UsersList } from "entities/users";

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
        />
    );
};
