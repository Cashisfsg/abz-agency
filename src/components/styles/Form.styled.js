import styled from "styled-components";

const StyledForm = styled.form`
    width: 100%;
    max-width: 380px;

    & > fieldset {
        display: flex;
        flex-direction: column;
        border: none;

        :first-child {
            display: flex;
            flex-direction: column;
            border: none;
            gap: 50px;
            margin-bottom: 43px;
        }

        :nth-child(2) {
            legend {
                margin-bottom: 11px;
            }

            display: flex;
            flex-direction: column;
            gap: 7px;
            margin-bottom: 47px;
        }
    }
`;

export default StyledForm;
