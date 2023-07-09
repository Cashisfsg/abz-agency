import { useForm } from "react-hook-form";
import { NewUser } from "../../types";

export const useUserDataValidation = () => {
    const formValidator = useForm<NewUser>({
        mode: "onChange",
        defaultValues: { phone: "+380", position_id: "1" }
    });

    return formValidator;
};
