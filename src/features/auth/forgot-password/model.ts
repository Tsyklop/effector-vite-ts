import {combine, createEffect, createEvent, createStore, sample} from "effector";
import {forgotPassword} from "@app/shared/api/auth";
import {showErrorToast} from "@app/shared/lib/toast";

export const forgotPasswordFx = createEffect(async (email : string) => {
  return await forgotPassword(email);
});

export const forgotPasswordFormSubmit = createEvent("forgot password form submit");

export const forgotPasswordFormResetInputs = createEvent("forgot password form reset inputs");

export const forgotPasswordFormEmailChange = createEvent("forgot password form email change");

const $forgotPasswordEmail = createStore("")
    .on(forgotPasswordFormEmailChange, (_, login) => login)
    .reset(forgotPasswordFormResetInputs)
    .reset(forgotPasswordFx.done);

const $signInAuthorizing = createStore(false)
    .on(forgotPasswordFx.pending, () => true)
    .reset(forgotPasswordFx.finally);

export const $forgotPasswordFormState = combine({
  email: $forgotPasswordEmail,
  authorizing: $signInAuthorizing,
});

sample({
  clock: forgotPasswordFormSubmit,
  source: $forgotPasswordFormState,
  target: forgotPasswordFx,
});

/*sample({
  clock: forgotPasswordFx.doneData,
  target: viewerModel.viewerSignInDone
});*/

/*sample({
  clock: viewerModel.viewerAuthCheckStarted,
  target: checkAuthFx,
});*/

sample({
  clock: forgotPasswordFx.failData,
  target: showErrorToast,
  fn: (reason) => (reason ? reason : "Error"),
});
