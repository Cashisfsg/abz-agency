import styled from "styled-components";
import { StyledContainer, StyledFlex } from "shared/ui";

import BannerBackgroundImage from "../assets/banner-bg.jpg";

export const StyledBanner = styled(StyledContainer).attrs({
    as: "section"
})`
    width: 100%;
    max-width: 1170px;
    height: 650px;
    max-height: 650px;

    /* flex: 1 1 auto; */

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${BannerBackgroundImage}) center center no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        height: 500px;
        max-height: 500px;
    }
`;

export const StyledBannerContent = styled(StyledFlex)`
    max-width: 380px;
    flex-direction: column;
    flex: 1 1 auto;

    color: #fff;

    & > h1 {
        margin-bottom: 1.25rem;
    }

    & > p {
        margin-bottom: 2rem;
    }
`;
