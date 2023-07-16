import { Preloader } from "shared/ui";

import { useUsersQuery } from "../lib";
import { User } from "../types";

interface FetchUsersProps {
    renderSuccess: (users: User[]) => React.ReactElement;
    loadingFallback?: React.ReactNode;
    renderError?: (error: string) => React.ReactElement;
}

const FetchUsers: React.FC<FetchUsersProps> = ({
    renderSuccess,
    loadingFallback = <Preloader />,
    renderError = error => <pre>{error}</pre>
}) => {
    const { data, status, error, isFetchingNextPage } = useUsersQuery();

    if (status === "error") return renderError(error.message);
    if (status === "pending") return loadingFallback;
    if (data && data.pages && data.pages.length !== 0) {
        const users = data.pages
            .flatMap(data => data?.users)
            .sort(
                (a, b) => b.registration_timestamp - a.registration_timestamp
            );

        if (isFetchingNextPage) {
            return renderSuccess([...users, ...Array(6)]);
        }

        return renderSuccess(users);
    }

    return <></>;
};

export default FetchUsers;
