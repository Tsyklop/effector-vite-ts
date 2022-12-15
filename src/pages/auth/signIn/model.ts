import {combine, createEvent, createStore, sample} from "effector";
import {authByEmailModel} from "@app/features/auth/index.js";

export const signInFormSubmit = createEvent("sign in form submit");

export const signInFormResetInputs = createEvent("sign in form reset inputs");

export const signInFormEmailChange = createEvent<string>("sign in form email change");
export const signInFormPasswordChange = createEvent<string>("sign in form password change");

const $signInEmail = createStore<string>("")
    .on(signInFormEmailChange, (_, login) => login)
    .reset(signInFormResetInputs)
    .reset(authByEmailModel.signInFx.done);

const $signInPassword = createStore<string>("")
    .on(signInFormPasswordChange, (_, password) => password)
    .reset(signInFormResetInputs)
    .reset(authByEmailModel.signInFx.done);

const $signInAuthorizing = createStore<boolean>(false)
    .on(authByEmailModel.signInFx.pending, () => true)
    .reset(authByEmailModel.signInFx.finally);

export const $signInFormState = combine({
    email: $signInEmail,
    password: $signInPassword,
    authorizing: $signInAuthorizing,
});

sample({
    clock: signInFormSubmit,
    source: $signInFormState,
    fn: ({email, password}) => ({email, password}),
    target: authByEmailModel.signInFx,
});
