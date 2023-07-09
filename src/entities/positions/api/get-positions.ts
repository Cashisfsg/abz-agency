import { axios } from "shared";
import { GetPositionsResponse } from "../types";

export const getPositions = async () => {
    const {
        data: { positions }
    } = await axios.get<GetPositionsResponse>(`/positions`);

    return positions;
};
