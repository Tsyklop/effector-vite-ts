import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route/index.js";
import {routes} from "@app/shared/lib/routes.js";

export const manageGroupsSecuredRoute = routeModel.securedRoute({
  route: routes.protected.manage.groups
});

export const ManageGroupsPage = () => {

  const isLoaded = useStore(manageGroupsSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>ManageGroupsPage</p>;

};
