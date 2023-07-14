import styled from "styled-components";

export const StyledCard = styled.li.attrs({ role: "listitem" })`
    width: 100%;

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

    & *:not(img) {
        display: block;
        width: 100%;
        overflow: hidden;
        text-align: center;
    }

    & a {
        margin-inline: auto;
        width: max-content;
        text-decoration: none;
        color: inherit;
    }

    & p,
    a {
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }
`;
