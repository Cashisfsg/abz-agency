import styled from "styled-components";

export const StyledUsersList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 370px));
    gap: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 370px));
    }

    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 370px);
    }
`;
