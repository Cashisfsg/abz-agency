import styled from "styled-components";

export const UsersContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 30px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        grid-template-columns: minmax(0, 1fr);
        grid-gap: 1.25rem;
    }
`;
