import styled from "styled-components";

export const StyledCard = styled.li.attrs({ role: "listitem" })`
    width: 100%;
    min-height: 254px;

    padding: 1.25rem;

    display: grid;
    gap: 1.25rem;
    place-items: center;

    background-color: #fff;
    border-radius: 1rem;

    overflow: hidden;
    list-style-type: none;

    & > img {
        display: block;
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }
`;
