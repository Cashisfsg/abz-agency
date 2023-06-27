import styled from "styled-components";
import LogoIcon from "../assets/logo.svg";

export const Logo = styled.img.attrs({
    src: `${LogoIcon}`,
    alt: "logo",
})`
    width: 104px;
    height: 26px;
`;
