import axios from "axios";

export const fetchUsers = async ({ page, count }) => {
    const response = await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
            params: { page, count },
        }
    );
    return await response.data;
};

export const fetchUserToken = async () => {
    const response = await axios.get("/token");
    return await response.data?.token;
};

export const createUser = async (token, data) => {
    const response = await axios.post("/users", {
        headers: {
            "Content-Type": "multipart/form-data",
            Token: token,
        },
        data: data,
    });
    console.log(await response.data);
};
