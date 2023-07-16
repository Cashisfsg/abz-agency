import { SubmitHandler } from "react-hook-form";

import {
    useUserDataValidation,
    useCreateNewUser,
    NewUser
} from "entities/users";
import { FetchPositions } from "entities/positions";
import { Input, StyledButton } from "shared/ui";

import { StyledForm } from "../ui";

const CreateNewUserForm = () => {
    const {
        register,
        formState: { errors, isValid },
        reset,
        handleSubmit,
        trigger
    } = useUserDataValidation();

    const onSuccessRegistration = () => {
        const imageNameElement = document.getElementById("photo-name");
        // const successSection = document.getElementById("banner");

        if (!imageNameElement) return;

        imageNameElement.innerText = "Upload your image";

        reset();

        // if (successSection) {
        //     successSection.scrollIntoView({ behavior: "smooth" });
        // }
    };

    const { mutate, isPending } = useCreateNewUser(onSuccessRegistration);

    const updateFilename: React.ChangeEventHandler<
        HTMLInputElement
    > = event => {
        trigger("photo");

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
            <StyledForm
                id="create-user-form"
                onSubmit={handleSubmit(createNewUser)}
                encType="multipart/form-data"
            >
                <fieldset>
                    <Input
                        label="your name"
                        aria-invalid={!!errors?.name}
                        errorText={errors?.name?.message}
                        {...register("name")}
                    />
                    <Input
                        type="email"
                        label="email"
                        aria-invalid={!!errors?.email}
                        errorText={errors?.email?.message}
                        {...register("email")}
                    />
                    <Input
                        type="tel"
                        label="phone"
                        aria-invalid={!!errors?.phone}
                        helperText="+38 (XXX) XXX - XX - XX"
                        errorText={errors?.phone?.message}
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
                    aria-invalid={!!errors?.photo}
                    errorText={errors?.photo?.message}
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
    );
};

export default CreateNewUserForm;
