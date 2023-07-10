import styled from "styled-components";
import { StyledContainer, StyledFlex } from "shared/ui";

import BannerBackgroundImage from "../assets/bg-image.webp";
import BannerBackgroundImage360w from "../assets/bg-image-360w.webp";
import BannerBackgroundImage768w from "../assets/bg-image-768w.webp";
import BannerBackgroundImage1024w from "../assets/bg-image-1024w.webp";

export const StyledBanner = styled(StyledContainer).attrs({
    as: "section"
})`
    width: 100%;
    max-width: 1170px;
    height: 650px;
    max-height: 650px;
    min-height: 500px;

    padding-top: 1rem;
    padding-bottom: 1rem;

    /* flex: 1 1 auto; */

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
        ),
        url(${BannerBackgroundImage});

    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    @media (max-width: 1024px) {
        height: clamp(500px, 65dvw, 650px);
        background-image: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${BannerBackgroundImage1024w});
    }

    @media (max-width: 768px) {
        background-image: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${BannerBackgroundImage768w});
    }

    @media (max-width: 360px) {
        background-image: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${BannerBackgroundImage360w});
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
