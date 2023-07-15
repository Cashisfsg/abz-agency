import { GridLoader } from "react-spinners";

import { StyledPreloader } from "./ui";

export const Preloader = () => {
    return (
        <StyledPreloader>
            <GridLoader />
        </StyledPreloader>
    );
};
