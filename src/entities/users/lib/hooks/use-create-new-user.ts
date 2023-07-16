import {
    useQueryClient,
    useMutation,
    InfiniteData
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { createNewUser } from "../../api";
import {
    NewUser,
    GetUsersResponse,
    CreateNewUserErrorResponse
} from "../../types";

export const useCreateNewUser = (onSuccessCallback: () => void) => {
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
            onSuccessCallback();
        },

        onError: (error: AxiosError<CreateNewUserErrorResponse, any>) => {
            if (!error?.response?.data?.fails) {
                alert(error?.response?.data?.message || error?.message);
                return;
            }
            alert(
                Object.values(error?.response?.data?.fails)
                    .flatMap(fail => fail.join(", "))
                    .join(", ")
            );
        }
    });

    return createNewUserMutation;
};
