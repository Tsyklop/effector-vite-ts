import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route/index.js";
import {routes} from "@app/shared/lib/routes.js";

export const manageClassroomsSecuredRoute = routeModel.securedRoute({
  route: routes.protected.manage.classrooms
});

export const ManageClassroomsPage = () => {

  const isLoaded = useStore(manageClassroomsSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>ManageClassroomsPage</p>;

};
