import {Link} from "atomic-router-react";
import {useEvent, useStore} from "effector-react";
import React from "react";
import {Helmet} from "react-helmet-async";
import {icons} from "@app/shared/assets/index.js";
import {routes} from "@app/shared/lib/routes";
import {AuthBanner, AuthFooter} from "@app/shared/ui";
import {
    $signInFormState,
    signInFormSubmit,
    signInFormEmailChange,
    signInFormPasswordChange,
} from "./model.js";

export const SignInPage = () => {

    const signInForm = useStore($signInFormState);

    const formSubmit = useEvent(signInFormSubmit);

    return (
        <>

            <Helmet title='SignIn'/>

            <AuthBanner/>

            <div className='sign-in-right-side'>

                <div className='sign-in-right-side_header'>
                    <icons.LogoSvg/>
                </div>

                <div className='sign-in-right-side_content'>

                    <form>

                        <div>
                            <p className='text-h1 fw-bold'>Welcome Back</p>
                            <span className='text-body-2 text-primary-grey'>Log in to your account</span>
                        </div>

                        <div className='sign-in-right-side_form'>

                            <div className='form-row'>

                                <label className='text-body-3 text-primary-grey form-label'
                                       htmlFor='sign-in-login'>
                                    Email
                                </label>
                                <input
                                    id='sign-in-login'
                                    type="text"
                                    name="login"
                                    value={signInForm.email}
                                    className='form-control'
                                    onChange={(e) => signInFormEmailChange(e.currentTarget.value)}
                                />

                            </div>

                            <div className='form-row'>

                                <label className='text-body-3 text-primary-grey form-label'
                                       htmlFor='sign-in-password'>
                                    Password
                                </label>
                                <input
                                    id='sign-in-password'
                                    type="password"
                                    name="password"
                                    value={signInForm.password}
                                    className='form-control'
                                    onChange={(e) => signInFormPasswordChange(e.currentTarget.value)}
                                />

                            </div>

                            <div className='form-row'>
                                <Link to={routes.auth.forgotPassword} className='text-body-3 text-blue fw-medium'>Forgot Password?</Link>
                            </div>

                            <div className='form-row'>
                                <button
                                    type="button"
                                    disabled={signInForm.authorizing}
                                    className='btn btn-primary'
                                    onClick={() => formSubmit()}
                                >
                                    Login
                                </button>
                            </div>

                            <div className='form-row text-center'>
                                <p className='text-body-3 text-primary-grey'>
                                    Having trouble signing in?
                                    {' '}
                                    <span className='text-blue fw-medium'>Support</span>
                                </p>
                            </div>

                        </div>

                    </form>

                </div>

                <AuthFooter/>

            </div>

        </>
    );
};
