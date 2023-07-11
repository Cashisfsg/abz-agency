import {
    useUserDataValidation,
    useCreateNewUser,
    NewUser
} from "entities/users";
import { FetchPositions } from "entities/positions";
import { Input, StyledButton, SuccessRegistration } from "shared/ui";

import { StyledForm } from "../ui";

// function formatPhoneNumber(phoneNumber: string) {
//     // Удаляем все символы, кроме цифр
//     const cleaned = phoneNumber.replace(/\D/g, "");

//     // Применяем формат к номеру телефона
//     const formatted = cleaned.replace(
//         /(\d{3})(\d{3})(\d{2})(\d{2})/,
//         "+38 ($1) $2-$3-$4"
//     );

//     return formatted;
// }

const CreateNewUserForm = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useUserDataValidation();

    const { mutate, isSuccess, isPending } = useCreateNewUser();

    const createNewUser = async (data: NewUser) => {
        mutate(data);
    };

    return (
        <>
            {isSuccess ? (
                <SuccessRegistration />
            ) : (
                <>
                    <StyledForm
                        id="create-user-form"
                        onSubmit={handleSubmit(createNewUser)}
                        encType="multipart/form-data"
                    >
                        <fieldset>
                            <Input
                                label="your name"
                                aria-invalid={!!errors?.name}
                                aria-errormessage={errors.name?.message}
                                {...register("name", {
                                    required: "Name is required field",
                                    minLength: {
                                        value: 3,
                                        message: "Min name length 3 symbols"
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "Max name length 60 symbols"
                                    }
                                    // onChange: (event) => {
                                    //     console.log(event.target.value);
                                    //     event.target.value = formatPhoneNumber(
                                    //         event.target.value
                                    //     );
                                    // },
                                })}
                            />
                            <Input
                                type="email"
                                label="email"
                                aria-invalid={!!errors?.email}
                                aria-errormessage={errors.email?.message}
                                {...register("email", {
                                    required: "Email is required field"
                                })}
                            />
                            <Input
                                type="tel"
                                label="phone"
                                helperText="+38 (XXX) XXX - XX - XX"
                                aria-invalid={!!errors?.phone}
                                aria-errormessage={errors.phone?.message}
                                {...register("phone", {
                                    required: "Phone is required field",
                                    pattern: {
                                        value: /^[+]{0,1}380([0-9]{9})$/,
                                        message:
                                            "Invalid format of phone number"
                                    }
                                    // onChange: (event) => {
                                    //     console.log(event.target.value);
                                    //     event.target.value = formatPhoneNumber(
                                    //         event.target.value
                                    //     );
                                    // },
                                })}
                            />
                        </fieldset>
                        <fieldset>
                            <FetchPositions
                                renderSuccess={positions => {
                                    return (
                                        <>
                                            {positions.map(position => (
                                                <Input
                                                    key={position.id}
                                                    type="radio"
                                                    label={position.name}
                                                    value={position.id}
                                                    {...register(
                                                        "position_id",
                                                        {
                                                            required: true
                                                        }
                                                    )}
                                                />
                                            ))}
                                        </>
                                    );
                                }}
                            />
                        </fieldset>
                        <Input
                            type="file"
                            accept={".jpg, .jpeg, .png"}
                            multiple={false}
                            aria-invalid={!!errors?.photo}
                            aria-errormessage={errors.photo?.message}
                            {...register("photo", {
                                required: "Photo is required field",
                                validate: {
                                    minSize: value => {
                                        const image = new Image();
                                        image.src = URL.createObjectURL(
                                            value[0]
                                        );

                                        image.onload = () => {
                                            if (image.width <= 70)
                                                return "Image width is smaller than the minimum limit (70px)";
                                            if (image.height <= 70)
                                                return "Image height is smaller than the minimum limit (70px)";
                                        };

                                        return true;
                                    },
                                    maxSize: value => {
                                        return (
                                            value[0]?.size <= 10485760 ||
                                            "File size exceeds the maximum limit (10MB)"
                                        );
                                    }
                                },
                                onChange: event => {
                                    const image = event.target.files[0] || null;
                                    if (image) {
                                        console.log(image);
                                    }
                                    console.log(image);
                                }
                            })}
                        />
                    </StyledForm>

                    <StyledButton
                        type="submit"
                        form="create-user-form"
                        disabled={!isValid || isPending}
                    >
                        Sign up
                    </StyledButton>
                </>
            )}
        </>
    );
};

export default CreateNewUserForm;
