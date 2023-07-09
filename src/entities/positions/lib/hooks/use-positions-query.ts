import { AxiosError } from "axios";
import { useQuery } from "react-query";

import { getPositions } from "../../api";
import { Position } from "../../types";

export const usePositionsQuery = () => {
    const query = useQuery<Position[], AxiosError, Position[], string[]>(
        ["positions"],
        getPositions,
        {
            refetchOnWindowFocus: false,
            retry: 3
        }
    );

    return query;
};
