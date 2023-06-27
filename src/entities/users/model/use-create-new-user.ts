import { useQueryClient, useMutation } from "react-query";

import { createNewUser } from "../api";
import { User } from "../types";

export const useCreateNewUser = () => {
    const queryClient = useQueryClient();

    const createNewUserMutation = useMutation(
        (userFormData: User) => createNewUser(userFormData),
        {
            onSuccess: () => {
                // queryClient.setQueriesData(["users", "infinite"], data);
                queryClient.invalidateQueries(["users", "infinite"]);
            },
        }
    );

    return createNewUserMutation;
};
