import React from "react";
import { StyledButton } from "shared/ui";

export const CreateNewUserButton = ({
    children,
    ...props
}: {
    children: React.ReactNode;
}) => {
    const createNewUser = async () => {
        let response = await fetch(
            "https://frontend-test-assignment-api.abz.agency/api/v1/token"
        );

        const { token } = await response.json();

        console.log(token);

        const requestParams = {
            method: "POST",
            headers: { "Content-Type": "application/json", Token: token },
            body: JSON.stringify({
                name: "Name",
                email: "email@example.com",
                phone: "+380501234567",
                position_id: "1",
            }),
        };

        response = await fetch(
            "https://frontend-test-assignment-api.abz.agency/api/v1/users",
            requestParams
        );

        const user = await response.json();

        console.log(user);
    };

    return (
        <StyledButton
            form="create-user-form"
            onClick={createNewUser}
            type="submit"
            {...props}
        >
            {children}
        </StyledButton>
    );
};
