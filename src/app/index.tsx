//import "./index.scss";

//import "effector-logger/inspector";

import { RouterProvider } from "atomic-router-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { router } from "@app/app/providers/router";
import Application from "./application";

const renderTarget = document.getElementById("root") as HTMLElement;

createRoot(renderTarget).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
        <Application />
      </RouterProvider>
      <ToastContainer position="bottom-right" />
    </HelmetProvider>
  </React.StrictMode>
);
