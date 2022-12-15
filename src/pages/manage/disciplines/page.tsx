import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route/index.js";
import {routes} from "@app/shared/lib/routes.js";

export const manageDisciplinesSecuredRoute = routeModel.securedRoute({
  route: routes.protected.manage.disciplines
});

export const ManageDisciplinesPage = () => {

  const isLoaded = useStore(manageDisciplinesSecuredRoute.$isOpened);

  if (!isLoaded) {
    return <h3>Loading</h3>;
  }

  return <p>ManageDisciplinesPage</p>;

};
