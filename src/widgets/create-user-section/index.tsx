import { SectionContent, InputField } from "features";

import {
    useUserDataValidation,
    useCreateNewUser,
    NewUser
} from "entities/users";
import { FetchPositions } from "entities/positions";
import {
    StyledForm,
    SuccessRegistration,
    StyledButton,
    InputFile
} from "shared/ui";

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

export const CreateUserSection = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useUserDataValidation();

    const { mutate, isSuccess, isLoading } = useCreateNewUser();

    const createNewUser = async (data: NewUser) => {
        console.log(data, typeof data);

        mutate(data);
    };

    return (
        <SectionContent
            title="Working with POST request"
            content={
                isSuccess ? (
                    <SuccessRegistration />
                ) : (
                    <StyledForm
                        id="create-user-form"
                        onSubmit={handleSubmit(createNewUser)}
                        encType="multipart/form-data"
                    >
                        <fieldset>
                            <InputField
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
                            <InputField
                                type="email"
                                label="email"
                                aria-invalid={!!errors?.email}
                                aria-errormessage={errors.email?.message}
                                {...register("email", {
                                    required: "Email is required field"
                                })}
                            />
                            <InputField
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
                                                <InputField
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
                        <InputFile
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
                )
            }
            button={
                <StyledButton
                    type="submit"
                    form="create-user-form"
                    disabled={!isValid || isLoading}
                >
                    Sign up
                </StyledButton>
            }
        />
    );
};
