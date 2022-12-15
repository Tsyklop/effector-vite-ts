import type {Tuple, DefaultMantineColor, MantineThemeOverride} from '@mantine/core';
import {Global, MantineProvider} from "@mantine/core";
import React, {FC} from "react";
// eslint-disable-next-line import/no-internal-modules
import gilroyBold from './fonts/Gilroy-Bold.ttf';
// eslint-disable-next-line import/no-internal-modules
import gilroyMedium from './fonts/Gilroy-Medium.ttf';
// eslint-disable-next-line import/no-internal-modules
import gilroyRegular from './fonts/Gilroy-Regular.ttf';
// eslint-disable-next-line import/no-internal-modules
import gilroySemiBold from './fonts/Gilroy-SemiBold.ttf';

type ExtendedCustomColors = 'white' | DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
    }
}

const global = [
    {
        '@font-face': {
            fontFamily: "Gilroy",
            src: `local("Gilroy-Regular"), url("${gilroyRegular}") format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap'
        }
    },
    {
        '@font-face': {
            fontFamily: "Gilroy",
            src: `local("Gilroy-Medium"), url("${gilroyMedium}") format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 500,
            fontDisplay: 'swap'
        }
    },
    {
        '@font-face': {
            fontFamily: "Gilroy",
            src: `local("Gilroy-SemiBold"), url("${gilroySemiBold}") format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 600,
            fontDisplay: 'swap'
        }
    },
    {
        '@font-face': {
            fontFamily: "Gilroy",
            src: `local("Gilroy-Bold"), url("${gilroyBold}") format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap'
        }
    },
];

const theme: MantineThemeOverride = {
    fontFamily: "'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    colors: {
        white: ['#FFFFFF', '#f2f2f2', '#d9d9d9', '#bfbfbf', '#a6a6a6', '#8c8c8c', '#737373', '#595959', '#404040', '#262626'],
    },
};

export const withMantine = (component: FC<any>) => {
    // eslint-disable-next-line react/display-name
    return () => (
        <>
            <Global styles={global}/>
            <MantineProvider theme={theme}
                             withGlobalStyles
                             withNormalizeCSS>
                {component()}
            </MantineProvider>
        </>
    );
}
