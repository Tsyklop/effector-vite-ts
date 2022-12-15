import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route";
import {routes} from "@app/shared/lib/routes";

export const managePlansSecuredRoute = routeModel.securedRoute({
  route: routes.protected.manage.plans
});

export const ManagePlansPage = () => {

  const isLoaded = useStore(managePlansSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>ManagePlansPage</p>;

};
