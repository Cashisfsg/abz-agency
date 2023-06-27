import { useInfiniteQuery } from "react-query";

import { getUsers } from "../api";

// interface getUsersProps {
//     page?: number;
//     count?: number;
// }

export const useUsersQuery = () => {
    const query = useInfiniteQuery(
        ["users", "infinite"],
        ({ pageParam = { page: 1, count: 6 } }) => getUsers(pageParam),
        {
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage) => {
                return lastPage.page < lastPage.total_pages
                    ? { page: lastPage.page + 1, count: lastPage.count }
                    : undefined;
            },
            // select: (data) => {
            //     console.log("Select  data: " + data.pages[0].users[1].name);
            //     return data;
            // },
        }
    );

    return query;
};
