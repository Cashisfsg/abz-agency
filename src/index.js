import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import "./app/index.css";

import { Preloader } from "shared/ui";

const App = lazy(() => import("./app"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Suspense fallback={<Preloader />}>
            <App />
        </Suspense>
    </React.StrictMode>
);
