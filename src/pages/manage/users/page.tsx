import {useStore} from "effector-react";
import React from "react";
import {routeModel} from "@app/features/route";
import {routes} from "@app/shared/lib/routes";

export const manageUsersSecuredRoute = routeModel.securedRoute({
    route: routes.protected.manage.users
});

export const ManageUsersPage = () => {

    const isLoaded = useStore(manageUsersSecuredRoute.$isOpened);

    if (!isLoaded) {
        return <h3>Loading</h3>;
    }

    return <p>ManageUsersPage</p>;

};
