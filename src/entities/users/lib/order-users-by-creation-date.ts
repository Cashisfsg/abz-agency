import { InfiniteData } from "react-query";
import { GetUsersResponse, User } from "../types";

export const orderUsersByCreationDate = (
    data: InfiniteData<GetUsersResponse>
) => {
    return data.pages
        .flatMap(page => {
            page.users;
        })
        .sort((a, b) => a.registration_timestamp - b.registration_timestamp);
};
