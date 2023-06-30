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
    return <RouterProvider router={router} />;
}

export default App;
