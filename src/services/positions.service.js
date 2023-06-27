import axios from "../shared/api/config";

export const fetchPositions = async () => {
    const response = await axios.get("/positions");
    return await response.data;
};
