import { useQuery } from "@tanstack/react-query";

import { getPositions } from "../../api";

export const usePositionsQuery = () => {
    const query = useQuery({
        queryKey: ["positions"],
        queryFn: getPositions,

        refetchOnWindowFocus: false,
        retry: 3
    });

    return query;
};
