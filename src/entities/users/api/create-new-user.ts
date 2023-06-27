import { User, GetTokenResponse } from "../types";

const getToken = async (): Promise<string> => {
    const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    const { token }: GetTokenResponse = await response.json();
    return token;
};

export const createNewUser = async (userFormData: User) => {
    const userData = new FormData();
    userData.append("name", userFormData.name);
    userData.append("email", userFormData.email);
    userData.append("phone", userFormData.phone);
    userData.append("position_id", userFormData.position_id);
    userData.append("photo", userFormData.photo[0]);

    const requestParams = {
        method: "POST",
        headers: {
            Token: await getToken(),
        },

        body: userData,
    };

    const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        requestParams
    );
    const user = await response.json();
    console.log(user);

    return user;
};
