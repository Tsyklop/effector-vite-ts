import {redirect} from "atomic-router";
import {createEvent, createStore, sample} from "effector";
import {createHashHistory} from "history";
import {serverConfigModel} from "@app/entities/server-config";
import {generalAuthModel} from "@app/features/auth";
import {routes} from "@app/shared/lib/routes.js";
// eslint-disable-next-line boundaries/element-types
import {router} from "../providers/router.js";

export const initialize = createEvent('initialize application');

export const initializeFailed = createEvent('initialize application failed');
export const initializeSuccess = createEvent('initialize application success');

export const $initialized = createStore(false, {name: 'application initialized'})
    .on(initializeFailed, () => false)
    .on(initializeSuccess, () => true);

sample({
    clock: initialize,
    target: serverConfigModel.getServerConfigFx
});

sample({
    clock: serverConfigModel.getServerConfigFx.done,
    target: initializeSuccess
});

sample({
    clock: serverConfigModel.getServerConfigFx.fail,
    target: initializeFailed
});

sample({
    clock: initializeSuccess,
    target: generalAuthModel.viewerCheckAuthFx
});

sample({
    clock: initializeSuccess,
    fn: () => createHashHistory(),
    target: router.setHistory,
});

redirect({
    clock: initializeFailed,
    route: routes.serverError
});
