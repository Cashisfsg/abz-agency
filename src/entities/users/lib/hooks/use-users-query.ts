import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getUsers } from "../../api";
import { GetUsersResponse } from "../../types";

export const useUsersQuery = () => {
    const query = useInfiniteQuery<
        GetUsersResponse,
        AxiosError,
        GetUsersResponse,
        string[]
    >(
        ["users", "infinite"],
        ({ pageParam = { page: 1, count: 6 } }) => getUsers(pageParam),
        {
            refetchOnWindowFocus: false,
            retry: 3,
            getNextPageParam: lastPage => {
                return lastPage.page < lastPage.total_pages
                    ? { page: lastPage.page + 1, count: lastPage.count }
                    : undefined;
            }
            // onSuccess: () => {
            //     queryClient.prefetchInfiniteQuery(
            //         ["users", "infinite"],
            //         lastPage =>
            //             getUsers({
            //                 page: lastPage.page + 1,
            //                 count: lastPage.count
            //             })
            //     );
            // }
            // select: (data) => {
            //     console.log("Select  data: " + data.pages[0].users[1].name);
            //     return data;
            // },
        }
    );

    return query;
};
