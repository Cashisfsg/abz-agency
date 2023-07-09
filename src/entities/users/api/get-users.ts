import { axios } from "shared";
import { GetUsersResponse, GetUserRequestParams } from "../types";

export const getUsers = async ({ page, count }: GetUserRequestParams) => {
    const { data } = await axios.get<GetUsersResponse>("/users", {
        params: { page, count }
    });

    return data;
};
