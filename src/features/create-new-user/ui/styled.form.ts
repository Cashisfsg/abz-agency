import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    max-width: 380px;

    display: grid;
    gap: 50px;
    grid-template-columns: minmax(0, 1fr);
    /* overflow: hidden; */

    & > fieldset {
        display: grid;

        border: none;
    }

    & > fieldset:nth-child(1) {
        gap: 50px;
    }

    & > fieldset:nth-child(2) {
        gap: 0.5rem;
    }
`;
