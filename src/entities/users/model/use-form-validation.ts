import { useForm } from "react-hook-form";

interface UserFormData {
    name: string;
    email: string;
    phone: string;
    position_id: string;
    photo: any;
}

export const useUserDataValidation = () => {
    const formValidator = useForm<UserFormData>({
        mode: "onChange",
        defaultValues: { phone: "+380", position_id: "1" },
    });

    return formValidator;
};
