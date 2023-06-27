import styled from "styled-components";
import { margin, weight } from "../../styles/mixin/mixin.styled";

const Text = styled.p`
    width: 100%;

    ${margin}
    ${weight}
    
    font-size: 1rem;
    overflow: ${(props) => (props["overflow-hidden"] ? "hidden" : "true")};
    text-overflow: ellipsis;
    white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};
    text-align: center;
`;

export default Text;
