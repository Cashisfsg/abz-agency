import { InfiniteData } from "react-query";
import { Root, User } from "../types";

export const orderUsersByCreationDate = (data: InfiniteData<Root>) => {
    return data.pages
        .flatMap((page) => {
            page.users;
        })
        .sort((a, b) => a.registration_timestamp - b.registration_timestamp);
};
