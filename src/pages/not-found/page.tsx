import { Link } from "atomic-router-react";
import React from "react";
import {routes} from "@app/shared/lib/routes";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to={routes.backToHomeRoute}>Back to home</Link>
    </div>
  );
};
