import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route";
import {routes} from "@app/shared/lib/routes.js";

export const manageLocationsSecuredRoute = routeModel.securedRoute({
  route: routes.protected.manage.locations
});

export const ManageLocationsPage = () => {

  const isLoaded = useStore(manageLocationsSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>ManageLocationsPage</p>;

};
