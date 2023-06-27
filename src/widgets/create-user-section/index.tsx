import { SectionContent, InputField } from "features";

import { useUserDataValidation, useCreateNewUser } from "entities/users";
import { usePositionsQuery } from "entities/positions";
import { StyledButton, SuccessRegistration } from "shared/ui";

function formatPhoneNumber(phoneNumber: string) {
    // Удаляем все символы, кроме цифр
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Применяем формат к номеру телефона
    const formatted = cleaned.replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})/,
        "+38 ($1) $2-$3-$4"
    );

    return formatted;
}

export const CreateUserSection = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useUserDataValidation();

    const {
        data: positions,

        status,
    } = usePositionsQuery();

    const { mutate, isSuccess, isLoading } = useCreateNewUser();

    const createNewUser = async (data: any) => {
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
                    <form
                        id="create-user-form"
                        onSubmit={handleSubmit(createNewUser)}
                        encType="multipart/form-data"
                        style={{
                            width: "100%",
                            maxWidth: "380px",
                            display: "grid",
                            gap: "50px",
                        }}
                    >
                        <fieldset
                            style={{
                                display: "grid",
                                gap: "50px",
                                border: "none",
                            }}
                        >
                            <InputField
                                label="your name"
                                aria-invalid={!!errors?.name}
                                aria-errormessage={errors.name?.message}
                                {...register("name", {
                                    required: "Name is required field",
                                    maxLength: {
                                        value: 60,
                                        message:
                                            "Max length of name 60 symbols",
                                    },
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
                                    required: "Email is required field",
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
                                            "Invalid format of phone number",
                                    },
                                    // onChange: (event) => {
                                    //     console.log(event.target.value);
                                    //     event.target.value = formatPhoneNumber(
                                    //         event.target.value
                                    //     );
                                    // },
                                })}
                            />
                        </fieldset>
                        <fieldset
                            style={{
                                display: "grid",
                                gap: "0.5rem",
                                border: "none",
                            }}
                        >
                            {positions &&
                                positions.length &&
                                positions.map((position: any) => (
                                    <InputField
                                        key={position.id}
                                        type="radio"
                                        label={position.name}
                                        value={position.id}
                                        {...register("position_id", {
                                            required: true,
                                        })}
                                    />
                                ))}
                        </fieldset>
                        <input
                            type="file"
                            accept={".jpg, .jpeg"}
                            multiple={false}
                            {...register("photo", {
                                required: true,
                                onChange: (event) => {
                                    console.log(event.target.files[0]);
                                },
                            })}
                        />
                    </form>
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
