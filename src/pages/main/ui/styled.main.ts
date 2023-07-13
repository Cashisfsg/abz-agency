import styled from "styled-components";
import { StyledFlex } from "shared/ui";

export const StyledMain = styled(StyledFlex).attrs({ as: "main" })`
    flex-direction: column;
    gap: 140px;
    padding-bottom: 100px;
    width: 100%;
    min-height: 100%;

    /* flex: 1 1 auto; */

    background-color: #f8f8f8;
`;
