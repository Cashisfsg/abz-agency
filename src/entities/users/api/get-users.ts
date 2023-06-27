import { axios } from "shared";
import { Root, GetUserRequestParams } from "../types";

export const getUsers = async ({ page, count }: GetUserRequestParams) => {
    const response = await axios.get<Root>("/users", {
        params: { page, count },
    });

    return response.data;
};
