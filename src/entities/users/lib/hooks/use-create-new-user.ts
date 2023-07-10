import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createNewUser } from "../../api";
import { NewUser } from "../../types";

export const useCreateNewUser = () => {
    const queryClient = useQueryClient();

    const createNewUserMutation = useMutation(
        (userFormData: NewUser) => createNewUser(userFormData),
        {
            onMutate: () => {
                queryClient.setQueryData(["users", "infinite"], data => ({
                    pages: [data.pages[0]],
                    pageParams: [data.pageParams[0]]
                }));
            },

            onSuccess: () => {
                queryClient.invalidateQueries(["users", "infinite"], {
                    exact: true
                });
            }
        }
    );

    return createNewUserMutation;
};
