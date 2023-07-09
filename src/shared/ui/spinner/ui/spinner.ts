import styled from "styled-components";
import Spinner from "../assets/spinner.svg";

export const StyledSpinner = styled.img.attrs({
    src: Spinner,
    alt: "Spinner"
})`
    width: 3rem;
    height: 3rem;

    justify-self: center;

    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
