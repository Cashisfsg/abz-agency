import { useUsersQuery } from "../lib";
import { User } from "../types";

interface FetchUsersProps {
    renderSuccess: (users: User[]) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string) => React.ReactElement;
}

const FetchUsers: React.FC<FetchUsersProps> = ({
    renderSuccess,
    loadingFallback = <pre>Loading...</pre>,
    renderError = error => <pre>{JSON.stringify(error)}</pre>
}) => {
    const { data, status, error } = useUsersQuery();

    if (status === "error") return renderError(error.message);
    if (status === "pending") return loadingFallback;
    if (data && data.pages && data.pages.length !== 0)
        return renderSuccess(
            data.pages
                .flatMap(data => data?.users)
                .sort(
                    (a, b) =>
                        b.registration_timestamp - a.registration_timestamp
                )
        );

    return <></>;
};

export default FetchUsers;
