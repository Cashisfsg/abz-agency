import { useQuery } from "react-query";
import { getPositions } from "../api";

export const usePositionsQuery = () => {
    const query = useQuery(["positions"], getPositions, {
        refetchOnWindowFocus: false,
    });

    return query;
};
