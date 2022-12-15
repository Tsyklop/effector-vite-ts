import {createRoutesView} from "atomic-router-react";
import React from "react";
import {SignInPage, ForgotPasswordPage} from "@app/pages/auth";
import {HomePage} from "@app/pages/home";
import * as manage from "@app/pages/manage";
import {NotFoundPage} from "@app/pages/not-found";
import {ServerErrorPage} from "@app/pages/server-error";
import {routes} from "@app/shared/lib/routes";
import {SpaLayout} from "@app/shared/ui";
import {ManageLayout} from "@app/widgets/page-template";

const manageRoutes = [
    {
        route: routes.protected.manage.plans,
        view: manage.ManagePlansPage,
        layout: ManageLayout,
    },
    {
        route: routes.protected.manage.users,
        view: manage.ManageUsersPage,
        layout: ManageLayout,
    },
    {
        route: routes.protected.manage.groups,
        view: manage.ManageGroupsPage,
        layout: ManageLayout,
    },
    {
        route: routes.protected.manage.courses,
        view: manage.ManageCoursesPage,
        layout: ManageLayout,
    },
    {
        route: routes.protected.manage.locations,
        view: manage.ManageLocationsPage,
        layout: ManageLayout,
    },
    {
        route: routes.protected.manage.dashboard,
        view: manage.ManageDashboardPage,
        layout: ManageLayout,
    },
    {
        route: routes.protected.manage.classrooms,
        view: manage.ManageClassroomsPage,
        layout: ManageLayout,
    },
    {
        route: routes.protected.manage.disciplines,
        view: manage.ManageDisciplinesPage,
        layout: ManageLayout,
    },
];

const RoutesView = createRoutesView({
    routes: [
        {
            route: routes.home,
            view: HomePage,
        },
        {
            route: routes.auth.signIn,
            view: SignInPage,
            layout: SpaLayout,
        },
        {
            route: routes.auth.forgotPassword,
            view: ForgotPasswordPage,
            layout: SpaLayout,
        },
        ...manageRoutes,
        {
            route: routes.protected.chooseRole,
            view: NotFoundPage,
            layout: SpaLayout,
        },
        {
            route: routes.notFound,
            view: NotFoundPage,
            layout: SpaLayout,
        },
        {
            route: routes.serverError,
            view: ServerErrorPage,
            layout: SpaLayout,
        },
    ],
    otherwise: NotFoundPage,
});

export const Pages = () => {
    return <RoutesView/>;
};
