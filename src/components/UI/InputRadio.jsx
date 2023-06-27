import React from "react";
import { StyledInputRadio } from "../styles/Styled.input.radio";

const InputRadio = ({ register, position, ...props }) => {
    return (
        <StyledInputRadio>
            <input
                type="radio"
                {...register("position_id", {
                    required: true,
                })}
                value={position?.id}
                {...props}
            />
            {position?.name}
        </StyledInputRadio>
    );
};

export default InputRadio;
