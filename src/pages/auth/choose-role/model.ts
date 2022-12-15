import { combine, createEvent, createStore, sample } from "effector";
import { authByEmailModel } from "@app/features/auth/index.js";

export const signInFormSubmit = createEvent("sign in form submit");

export const signInFormResetInputs = createEvent("sign in form reset inputs");

export const signInFormLoginChange = createEvent("sign in form login change");
export const signInFormPasswordChange = createEvent(
  "sign in form password change"
);

const $signInLogin = createStore("")
  .on(signInFormLoginChange, (_, login) => login)
  .reset(signInFormResetInputs)
  .reset(authByEmailModel.signInFx.done);

const $signInPassword = createStore("")
  .on(signInFormPasswordChange, (_, password) => password)
  .reset(signInFormResetInputs)
  .reset(authByEmailModel.signInFx.done);

const $signInAuthorizing = createStore(false)
  .on(authByEmailModel.signInFx.pending, () => true)
  .reset(authByEmailModel.signInFx.finally);

export const $signInFormState = combine({
  login: $signInLogin,
  password: $signInPassword,
  authorizing: $signInAuthorizing,
});

sample({
  clock: signInFormSubmit,
  source: $signInFormState,
  target: authByEmailModel.signInFx,
});
