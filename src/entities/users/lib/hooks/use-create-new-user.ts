import {
    useQueryClient,
    useMutation,
    InfiniteData
} from "@tanstack/react-query";

import { createNewUser } from "../../api";
import { NewUser, GetUsersResponse } from "../../types";

export const useCreateNewUser = () => {
    const queryClient = useQueryClient();

    const createNewUserMutation = useMutation({
        mutationKey: ["addUser"],
        mutationFn: (userFormData: NewUser) => createNewUser(userFormData),

        onMutate: () => {
            queryClient.setQueryData(
                ["users", "infinite"],
                (data: InfiniteData<GetUsersResponse> | undefined) => {
                    if (!data) return undefined;

                    return {
                        pages: data.pages.slice(0, 1),
                        pageParams: data.pageParams.slice(0, 1)
                    };
                }
            );
        },

        onSuccess: () => {
            queryClient.invalidateQueries(
                {
                    queryKey: ["users", "infinite"],
                    exact: true,
                    refetchType: "active"
                },
                {
                    throwOnError: true,
                    cancelRefetch: true
                }
            );
        }
    });

    return createNewUserMutation;
};
