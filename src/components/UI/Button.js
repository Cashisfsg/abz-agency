import styled from "styled-components";

const Button = styled.button`
    height: 34px;
    width: fit-content;
    min-width: 100px;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 80px;
    border: none;
    outline: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    :disabled {
        background: #b4b4b4;
        color: #ffffff;
        pointer-events: none;
    }
`;

export default Button;
