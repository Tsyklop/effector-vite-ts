import {useEvent, useStore} from "effector-react";
import React from "react";
import {forgotPasswordByEmailModel as model} from "@app/features/auth";

export const ForgotPasswordForm = () => {

    const form = useStore(model.$forgotPasswordFormState);

    const formSubmit = useEvent(model.forgotPasswordFormSubmit);

    return (
        <form>

            <div className='form-row'>

                <label className='text-body-3 text-primary-grey form-label'
                       htmlFor='forgot-password-email'>
                    Email
                </label>
                <input
                    id='forgot-password-email'
                    type="email"
                    name="email"
                    value={form.email}
                    className='form-control'
                    onChange={(e) => model.forgotPasswordFormEmailChange(e.currentTarget.value)}
                />

            </div>

            <div className='form-row'>
                <button
                    type="button"
                    disabled={form.authorizing}
                    className='btn btn-primary'
                    onClick={() => formSubmit()}
                >
                    Submit
                </button>
            </div>

        </form>
    );

};
