import {createEffect, sample} from "effector";
import {viewerModel} from "@app/entities/viewer";
import {signInUser, signOutUser} from "@app/shared/api/auth";
import {showErrorToast} from "@app/shared/lib/toast";
import {SignInParamsType, ViewerType} from "@app/shared/lib/types";

export const signInFx = createEffect<SignInParamsType, ViewerType>(async (data) => {
  return await signInUser(data);
});

export const signOutUserFx = createEffect(async () => {
  await signOutUser();
  return null;
});

signInFx.doneData.watch(() => {
  localStorage.setItem('viewerCheckAuth', 'true');
});

signOutUserFx.doneData.watch(() => {
  localStorage.setItem('viewerCheckAuth', 'false');
});

sample({
  clock: signInFx.doneData,
  target: [viewerModel.viewerSignInDone, viewerModel.viewerAuthCheckSuccess]
});

/*sample({
  clock: checkViewerAuthFx.doneData,
  target: viewerModel.viewerAuthCheckSuccess
});*/

/*sample({
  clock: viewerModel.viewerAuthCheckStarted,
  target: checkAuthFx,
});*/

sample({
  clock: signInFx.failData,
  target: showErrorToast,
  fn: ({message} : {message: string}) => (message ? message : "Error"),
});
