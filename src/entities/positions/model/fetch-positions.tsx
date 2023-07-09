import { StyledSpinner } from "shared/ui";

import { usePositionsQuery } from "../lib";
import { Position } from "../types";

interface FetchPositionsProps {
    renderSuccess: (positions: Position[]) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string) => React.ReactElement;
}

export const FetchPositions: React.FC<FetchPositionsProps> = ({
    renderSuccess,
    loadingFallback = <StyledSpinner />,
    renderError = error => <pre>{JSON.stringify(error)}</pre>
}) => {
    const { data: positions, status, error } = usePositionsQuery();

    if (status === "error") return renderError(error.message);
    if (status === "loading") return loadingFallback;
    if (positions && positions.length !== 0) return renderSuccess(positions);

    return <></>;
};
