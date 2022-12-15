import React from "react";
import {ReactComponent as BannerIcon} from "./banner.svg";

export const AuthBanner = () => {
    return (
        <div className='auth-banner'>

            <BannerIcon/>

            <div className='auth-banner_content'>
                <p className='text-body-2 text-blue'>TeacherCRM Platform</p>
                <p className='text-body-2 text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                    Purus sit amet luctus venenatis, lectus magna fringilla
                </p>
                <p className='text-body-3 text-primary-grey'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                </p>
            </div>

        </div>
    );
};
