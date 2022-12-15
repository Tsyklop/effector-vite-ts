import {createEvent, createStore} from "effector";
import {ViewerType} from "@app/shared/lib/types";
//import connectLocalStorage from "effector-localstorage";

/*const accessTokenLocalStorage = connectLocalStorage("access-token").onError((err) =>
    console.log('access token parsing error', err)
);

const refreshTokenLocalStorage = connectLocalStorage("refresh-token").onError((err) =>
    console.log('refresh token parsing error', err)
);*/

export const viewerSignedIn = createEvent("viewer signed in");

export const viewerSignInDone = createEvent<ViewerType>("viewer sign in done");

export const viewerAuthCheckSuccess = createEvent<ViewerType>("viewer auth check success");
export const viewerAuthCheckFailure = createEvent<string>("viewer auth check failure");

/*export const $accessToken = createStore(accessTokenLocalStorage.init(null), {name: "access token"})
    .on(viewerSignInDone, (_, {token}) => token.access);

export const $refreshToken = createStore(refreshTokenLocalStorage.init(null), {name: "refresh token"})
    .on(viewerSignInDone, (_, {token}) => token.refresh);*/

export const $viewer = createStore<ViewerType | null>(null, {name: "viewer"})
    .on(viewerAuthCheckSuccess, (state, viewer: ViewerType) => ({...state, ...viewer}))
    .on(viewerAuthCheckFailure, () => null);

console.log($viewer.sid)

export const $isAuthorized = $viewer.map(Boolean);

/*$accessToken.watch((data) => {

    if ($accessToken.getState() === data) {
        return;
    }

    console.log('update access token');
    accessTokenLocalStorage(data);

});

$refreshToken.watch((data) => {

    if ($refreshToken.getState() === data) {
        return;
    }

    console.log('update refresh token');
    refreshTokenLocalStorage(data);

});*/
