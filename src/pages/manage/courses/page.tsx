import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route/index.js";
import {routes} from "@app/shared/lib/routes.js";

export const manageCoursesSecuredRoute = routeModel.securedRoute({
  route: routes.protected.manage.courses
});

export const ManageCoursesPage = () => {

  const isLoaded = useStore(manageCoursesSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>ManageCoursesPage</p>;

};
