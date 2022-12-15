import React from "react";
import {Helmet} from "react-helmet-async";
import {withProviders} from "@app/app/providers";
import {Pages} from "@app/pages";
import {initializationModel} from "./initialization";

import '@app/processes';

const helmetDefaultParams = {
    defaultTitle: "Test",
    titleTemplate: "Test | %s",
    htmlAttributes: {lang: "en"},
};

initializationModel.initialize();

function Application() {

    return (
        <>

            <Helmet {...helmetDefaultParams}>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>

            <Pages/>

        </>
    );
}

export default withProviders(Application);
