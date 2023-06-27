import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";

export const StyledHeader = styled.header`
    height: 60px;
    width: 100%;
    background: #ffffff;
`;

export const Logo = styled.img.attrs({
    src: LogoImg,
    alt: "logo",
})`
    height: 26px;
    width: 104px;
`;

export const HeaderContent = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;
