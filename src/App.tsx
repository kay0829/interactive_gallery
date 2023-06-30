import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sample from "@container/Sample";
import ErrorPage from "@container/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Sample />,
        errorElement: <ErrorPage />,
        children: [],
    },
    {
        path: "/sample",
        element: <Sample />,
        children: [],
    },
]);

function App() {
    const globalCss = "overflow-x-hidden min-h-screen m-0 p-0 box-border font-sans";

    return (
        <div className={`${globalCss}`}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
