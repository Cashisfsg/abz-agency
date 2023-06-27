import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 3.5rem;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        padding: ${({ theme }) => theme.padding.tablet};
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        padding: ${({ theme }) => theme.padding.mobile};
    }
`;

export default Container;
