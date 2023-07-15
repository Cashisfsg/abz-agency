import { StyledSpinner } from "shared/ui";

import { StyledSkeletonCard } from "./styled.skeleton-card";

import Photo from "../../assets/photo-cover.svg";

export const SkeletonCard = () => {
    return (
        <StyledSkeletonCard>
            <img
                src={Photo}
                alt="Default user photo"
            />
            <div>
                <StyledSpinner />
            </div>
        </StyledSkeletonCard>
    );
};
