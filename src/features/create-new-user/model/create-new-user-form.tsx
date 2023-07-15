import { SubmitHandler } from "react-hook-form";

import {
    useUserDataValidation,
    useCreateNewUser,
    NewUser
} from "entities/users";
import { FetchPositions } from "entities/positions";
import { Input, StyledButton, SuccessRegistration } from "shared/ui";

import { StyledForm } from "../ui";

const CreateNewUserForm = () => {
    const {
        register,
        formState: {
            errors: { name, email, phone, photo },
            isValid
        },
        handleSubmit
    } = useUserDataValidation();

    const { mutate, isSuccess, isPending } = useCreateNewUser();

    const updateFilename: React.ChangeEventHandler<
        HTMLInputElement
    > = event => {
        const imageNameElement = document.getElementById("photo-name");

        if (!imageNameElement) return;

        const [image] = Array.from(event.target.files as FileList) as File[];

        if (!image) {
            imageNameElement.innerText = "Upload your image";
            return;
        }

        imageNameElement.innerText = image?.name;
    };

    const createNewUser: SubmitHandler<NewUser> = data => {
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
                                aria-invalid={!!name}
                                errorText={name?.message}
                                {...register("name")}
                            />
                            <Input
                                type="email"
                                label="email"
                                aria-invalid={!!email}
                                errorText={email?.message}
                                {...register("email")}
                            />
                            <Input
                                type="tel"
                                label="phone"
                                aria-invalid={!!phone}
                                helperText="+38 (XXX) XXX - XX - XX"
                                errorText={phone?.message}
                                {...register("phone")}
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
                                                    {...register("position_id")}
                                                />
                                            ))}
                                        </>
                                    );
                                }}
                            />
                        </fieldset>
                        <Input
                            type="file"
                            accept={"image/jpg, image/jpeg, image/png"}
                            multiple={false}
                            aria-invalid={!!photo}
                            errorText={photo?.message}
                            {...register("photo", {
                                onChange: updateFilename
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
