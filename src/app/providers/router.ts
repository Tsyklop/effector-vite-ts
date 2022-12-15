import {createHistoryRouter} from "atomic-router";
import {routes} from "@app/shared/lib/routes";

const manageRoutesConfig = [
    {path: "/manage", route: [routes.protected.manage.dashboard]},
    {path: "/manage/plans", route: [routes.protected.manage.plans]},
    {path: "/manage/users", route: [routes.protected.manage.users]},
    {path: "/manage/groups", route: [routes.protected.manage.groups]},
    {path: "/manage/courses", route: [routes.protected.manage.courses]},
    {path: "/manage/locations", route: [routes.protected.manage.locations]},
    {path: "/manage/classrooms", route: [routes.protected.manage.classrooms]},
    {path: "/manage/disciplines", route: [routes.protected.manage.disciplines]},
];

export const routesConfig = [
    {path: "/", route: [routes.home, routes.backToHomeRoute]},
    {path: "/auth/sign-in", route: routes.auth.signIn},
    {path: "/auth/forgot-password", route: routes.auth.forgotPassword},
    {path: "/choose-role", route: routes.protected.chooseRole},
    ...manageRoutesConfig,
    {path: "/404", route: routes.notFound},
    {path: "/500", route: routes.serverError},
]

export const router = createHistoryRouter({
    routes: routesConfig,
    notFoundRoute: routes.notFound,
});

/*router.$activeRoutes.watch((routes) => {
    currentRouteModel.currentRouteChanged(routes);
});*/

/*sample({
    clock: router.$activeRoutes,
    target: currentRouteModel.currentRouteChanged
});*/

router.initialized.watch(() => {
    console.log("router.initialized");
});
