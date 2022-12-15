import {attach, sample} from "effector";
import {viewerModel} from "@app/entities/viewer/index.js";
import {getUserData} from "@app/shared/api/user";

export const viewerCheckAuthFx = attach({
    effect: async ({viewer, isAuthorized}) => {
        const isAuth = Boolean(localStorage.getItem('viewerCheckAuth'));
        if (isAuth || isAuthorized) {
            if (isAuthorized) {
                return viewer;
            }
            return await getUserData();
        } else {
            return Promise.reject('auth = false');
        }
    },
    source: {
        viewer: viewerModel.$viewer,
        isAuthorized: viewerModel.$isAuthorized
    },
});

sample({
    clock: viewerCheckAuthFx.doneData,
    target: viewerModel.viewerAuthCheckSuccess
});

sample({
    clock: viewerCheckAuthFx.failData,
    fn: (error) => error?.message,
    target: viewerModel.viewerAuthCheckFailure
});

/*checkViewerAuthFx.done.watch(({result}) => {
  viewerModel.viewerAuthCheckSuccess(result);
});

checkViewerAuthFx.fail.watch(({ error }) => {
  console.error(error)
  viewerModel.viewerAuthCheckFailure(error.message);
});*/
