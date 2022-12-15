import {createStyles} from "@mantine/core";
import React, {ReactNode} from "react";

const useStyles = createStyles((theme, _params, getRef) => {
    return {
        spaLayout: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
        },
        spaContainer: {
            overflowY: 'auto',
            flexGrow: 1
        },
        spaContent: {
            width: '100%',
            height: '100%',
            display: 'flex'
        }
    };
});

export function SpaLayout({children}: { children: ReactNode }) {

    const {classes} = useStyles();

    return (
        <div className={classes.spaLayout}>
            <div className={classes.spaContainer}>
                <div className={classes.spaContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}
