import { lazy } from "react";
import { SectionContent } from "features";

const CreateNewUserForm = lazy(
    () => import("features/create-new-user/model/create-new-user-form")
);

export const CreateUserSection = () => {
    return (
        <SectionContent
            title="Working with POST request"
            content={<CreateNewUserForm />}
        />
    );
};
