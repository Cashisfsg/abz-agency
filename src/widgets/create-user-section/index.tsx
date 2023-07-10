import { lazy } from "react";
import { SectionContent } from "features";
import { StyledButton } from "shared/ui";

const CreateNewUserForm = lazy(
    () => import("features/create-new-user/model/create-new-user-form")
);

export const CreateUserSection = () => {
    return (
        <SectionContent
            title="Working with POST request"
            content={<CreateNewUserForm />}
            button={
                <StyledButton
                    type="submit"
                    form="create-user-form"
                    // disabled={!isValid || isLoading}
                >
                    Sign up
                </StyledButton>
            }
        />
    );
};
