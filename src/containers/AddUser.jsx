import React from "react";
import { useForm } from "react-hook-form";

import FetchPositions from "../components/FetchPositions";
import { fetchUserToken, createUser } from "../services/users.service";

import Container from "../components/Container";
import { Flex } from "../components/UI/Flex";
import Title from "../components/UI/Title";
import Input from "../components/UI/Input";
import InputTypeFile from "../components/UI/InputTypeFile";
import Button from "../components/UI/Button";
import StyledForm from "../components/styles/Form.styled";

const AddUser = () => {
    const {
        register,
        getValues,
        formState: { errors, isValid, touchedFields },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        defaultValues: { phone: "+380", position_id: "1" },
    });

    const addUser = async (data) => {
        console.log("Event ", data);
        try {
            const token = await fetchUserToken();
            console.log("Token: ", token);
            await createUser(token, data);
        } catch (error) {
            console.error(error?.message);
        }
    };

    return (
        <Container>
            <Flex column gap={"50px"}>
                <Title>Working with POST request</Title>
                <StyledForm id="user-form" onSubmit={handleSubmit(addUser)}>
                    <fieldset>
                        <Input
                            {...register("name", {
                                required: "Name is required field",
                                maxLength: {
                                    value: 3,
                                    message: "Max length of name 3 symbols",
                                },
                                onChange: () =>
                                    console.log(touchedFields?.name),
                            })}
                            id="user-name"
                            placeholder="name"
                            errorMessage={errors?.name?.message}
                            aria-invalid={!!errors?.name}
                        />
                        <Input
                            type="email"
                            {...register("email", {
                                required: "Email is required field",
                                pattern: {
                                    value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
                                    message: "Invalid format of email address",
                                },
                            })}
                            id="user-email"
                            placeholder="Email"
                            errorMessage={errors?.email?.message}
                            aria-invalid={!!errors?.email}
                        />
                        <Input
                            {...register("phone", {
                                required: "Phone is required field",
                                pattern: {
                                    value: /^[+]{0,1}380([0-9]{9})$/,
                                    message: "Invalid format of phone number",
                                },
                            })}
                            type="tel"
                            id="user-phone"
                            placeholder="phone"
                            helperMessage="+38 (XXX) XXX - XX - XX"
                            errorMessage={errors?.phone?.message}
                            aria-invalid={!!errors?.phone}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Select your position</legend>
                        <FetchPositions register={register} />
                    </fieldset>
                    <InputTypeFile
                        {...register("photo", {
                            required: true,
                            validate: {
                                lessThan10MB: (files) =>
                                    files[0]?.size < 1000000 || "Max 10MB",
                            },
                        })}
                        type="file"
                        aria-invalid={!!errors?.photo}
                        fileName={
                            getValues("photo")?.files
                                ? getValues("photo")?.files[0]?.name
                                : "dsda"
                        }
                        errorMessage={errors?.photo?.message}
                    />
                </StyledForm>
                <Button form="user-form" type="submit" disabled={!isValid}>
                    Sign Up
                </Button>
            </Flex>
        </Container>
    );
};

export default AddUser;
