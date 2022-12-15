import {chainRoute, redirect} from "atomic-router";
import {sample, createEvent, Unit} from "effector";
import {viewerModel} from "@app/entities/viewer/index.js";
import {routes} from "@app/shared/lib/routes";
import {RouteInstance} from "@app/shared/lib/types";

export function securedRoute({route, whenAnonymousEvent}: {route: RouteInstance, whenAnonymousEvent?: Unit<any>}) {

    const sessionCheckStarted = createEvent<any>();

    const alreadyAuthorized = sample({
        clock: sessionCheckStarted,
        filter: viewerModel.$isAuthorized,
    });

    alreadyAuthorized.watch((state) => {
        console.log('alreadyAuthorized = ', state)
    });

    if (!whenAnonymousEvent) {
        redirect({
            route: routes.auth.signIn,
            clock: [viewerModel.viewerAuthCheckFailure]
        });
    } else {
        sample({
            clock: viewerModel.viewerAuthCheckFailure,
            target: whenAnonymousEvent
        });
    }

    return chainRoute({
        route,
        openOn: [alreadyAuthorized, viewerModel.viewerSignInDone, viewerModel.viewerAuthCheckSuccess],
        beforeOpen: sessionCheckStarted,
    });

}

/*
export function anonymousRoute({route, whenAuthorizedEvent}) {

    return chainRoute({
        route,
        openOn: [alreadyAuthorized, viewerModel.viewerSignInDone, viewerModel.viewerAuthCheckSuccess],
        beforeOpen: sessionCheckStarted,
    });

}*/
