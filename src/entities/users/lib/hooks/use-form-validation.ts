import { useForm } from "react-hook-form";
import { NewUser } from "../../types";
import {
    useYupValidationResolver,
    validationSchema
} from "./use-yup-validation-resolver";

export const useUserDataValidation = () => {
    const yupResolver = useYupValidationResolver(validationSchema);

    const formValidator = useForm<NewUser>({
        mode: "onChange",
        resolver: yupResolver,
        defaultValues: { name: "", email: "", phone: "+380", position_id: "1" }
    });

    return formValidator;
};
