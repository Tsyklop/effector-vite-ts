import {createStyles} from "@mantine/core";
import React from "react";
import {SpaLayout} from "./SpaLayout";

const useStyles = createStyles((theme, _params, getRef) => {
    return {
        pageContent: {
            flexGrow: 1,
            padding: '28px'
        },
        pageContentWrapper: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column'
        }
    };
});

export function ProtectedLayout({
                                    sidebar,
                                    header,
                                    children
                                }: { sidebar: JSX.Element, header: JSX.Element | null, children: any }) {

    const {classes} = useStyles();

    return (
        <SpaLayout>

            {sidebar}

            <div className={classes.pageContentWrapper}>

                {header}

                <div className={classes.pageContent}>
                    {children}
                </div>

            </div>

        </SpaLayout>
    );
}
