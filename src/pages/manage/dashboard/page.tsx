import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route/index.js";
import {routes} from "@app/shared/lib/routes.js";

export const manageDashboardSecuredRoute = routeModel.securedRoute({
  route: routes.protected.manage.dashboard
});

export const ManageDashboardPage = () => {

  const isLoaded = useStore(manageDashboardSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>ManageDashboardPage</p>;

};
