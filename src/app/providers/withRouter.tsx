import { RouterProvider } from "atomic-router-react";
import React from "react";
import { router } from "./router.js";

export const withRouter = (component) => {
    // eslint-disable-next-line react/display-name
    return () => (
        <RouterProvider router={router}>{component()}</RouterProvider>
    );
}
