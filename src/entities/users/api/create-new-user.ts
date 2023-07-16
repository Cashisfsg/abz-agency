import { axios } from "shared";
import {
    NewUser,
    GetTokenResponse,
    CreateNewUserSuccessResponse
} from "../types";

const getToken = async () => {
    const {
        data: { token }
    } = await axios.get<GetTokenResponse>("/token");

    return token;
};

export const createNewUser = async (userFormData: NewUser) => {
    const userData = new FormData();

    Object.entries(userFormData).forEach(([key, value]) => {
        userData.append(
            key,
            value instanceof FileList
                ? value[0]
                : key === "email"
                ? (value as string).toLowerCase()
                : (value as string)
        );
    });

    const { data } = await axios.post<CreateNewUserSuccessResponse>(
        "/users",
        userData,
        {
            headers: { Token: await getToken() }
        }
    );

    return data;
};
