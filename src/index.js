import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Preloader from "./components/UI/Preloader";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const App = React.lazy(() => import("./App"));

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Suspense fallback={<Preloader />}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Suspense>
    </React.StrictMode>
);
