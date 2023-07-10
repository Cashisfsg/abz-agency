import { useInfiniteQuery } from "@tanstack/react-query";

import { getUsers } from "../../api";

export const useUsersQuery = () => {
    const queryClient = useInfiniteQuery({
        queryKey: ["users", "infinite"],
        queryFn: ({ pageParam }) => getUsers(pageParam),

        defaultPageParam: { page: 1, count: 6 },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
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
    });

    return queryClient;
};
