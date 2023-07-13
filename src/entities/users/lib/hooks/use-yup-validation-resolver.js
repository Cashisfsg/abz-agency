import { useCallback } from "react";
import { object, string, number, mixed } from "yup";

export const useYupValidationResolver = validationSchema =>
    useCallback(
        async data => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false
                });

                return {
                    values,
                    errors: {}
                };
            } catch (errors) {
                return {
                    values: {},
                    errors: errors?.inner.reduce(
                        (allErrors, currentError) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? "validation",
                                message: currentError.message
                            }
                        }),
                        {}
                    )
                };
            }
        },
        [validationSchema]
    );

export const validationSchema = object({
    name: string()
        .required("Name is required field")
        .min(3, "Min length must be greater than 3 characters")
        .max(60, "Max length must be less than 60 characters"),
    email: string()
        .required("Email is required field")
        .email("Invalid email address")
        .min(3, "Min length must be greater than 3 characters")
        .max(60, "Max length must be less than 60 characters"),
    phone: string()
        .required("Phone is required field")
        .matches(/^[+]{0,1}380([0-9]{9})$/, "Invalid format of phone number"),
    position_id: number().required().positive(),
    photo: mixed()
        .test("required", "File is required field", fileList => {
            return fileList && fileList[0];
        })
        .test(
            "maxSize",
            "File size exceeds the maximum limit (10MB)",
            fileList => {
                if (!(fileList && fileList[0])) return true;
                return fileList[0]?.size <= 10 * 1024 * 1024;
            }
        )
        .test(
            "minSize",
            "Image size is smaller than the minimum limit (70px)",
            fileList => {
                if (!(fileList && fileList[0])) return true;

                return new Promise(resolve => {
                    const image = new Image();

                    image.onload = () => {
                        const { width, height } = image;
                        if (width < 70 || height < 70) {
                            resolve(false);
                        } else {
                            resolve(true);
                        }
                    };

                    image.onerror = () => {
                        resolve(false);
                    };

                    image.src = URL.createObjectURL(fileList[0]);
                });
            }
        )
});
