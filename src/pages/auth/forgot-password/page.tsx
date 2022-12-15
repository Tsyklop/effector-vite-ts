import React from "react";
import {Helmet} from "react-helmet-async";
import {ForgotPasswordForm} from "@app/features/auth/index.js";
import {icons} from "@app/shared/assets/index.js";
import {AuthBanner, AuthFooter} from "@app/shared/ui/index.js";

export const ForgotPasswordPage = () => {

  return (
    <>

      <Helmet title='Forgot Password'/>

        <AuthBanner/>

        <div className='sign-in-right-side'>

            <div className='sign-in-right-side_header'>
                <icons.LogoSvg/>
            </div>

            <div className='sign-in-right-side_content'>

                <div>
                    <p className='text-h1 fw-bold'>Welcome Back</p>
                    <span className='text-body-2 text-primary-grey'>Log in to your account</span>
                </div>

                <div className='sign-in-right-side_form'>
                    <ForgotPasswordForm/>
                </div>

            </div>

            <AuthFooter/>

        </div>

    </>
  );
};
