import React from "react";
import { HelmetProvider } from "react-helmet-async";

export const withHelmet = (component: any) => {
// eslint-disable-next-line react/display-name
    return () => (
        <HelmetProvider>{component()}</HelmetProvider>
    );
}
