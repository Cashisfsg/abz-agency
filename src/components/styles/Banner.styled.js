import styled from "styled-components";
import BgImageDesktop from "../../assets/bg-image-large.jpg";
import BgImageTablet from "../../assets/bg-image-medium.jpg";
import BgImageMobile from "../../assets/bg-image-small.jpg";

export const StyledBanner = styled.section`
    height: 650px;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${BgImageDesktop});
    /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */

    /* background-image: -webkit-image-set(
        BgImageTablet 0.5x,
        BgImageMobile 0.75x
    );
    background-image: image-set(
        url(${BgImageTablet}) 1x,
        url(${BgImageMobile}) 2x
    ); */

    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        height: 500px;
        background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${BgImageTablet});
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${BgImageMobile});
    }
`;

export const BannerContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 380px;
    color: #ffffff;
    padding: 2rem;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        padding: ${({ theme }) => theme.padding.mobile};
    }
`;
