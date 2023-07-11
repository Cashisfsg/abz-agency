import styled from "styled-components";
import SuccessImage from "../assets/success-image.svg";

export const SuccessRegistration = styled.img.attrs({
    src: `${SuccessImage}`,
    alt: "User successfully registered",
    loading: "lazy"
})`
    width: 328px;
    height: 290px;
`;
