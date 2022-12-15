import {createStyles} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme, _params, getRef) => {
    return {
        header: {
            width: '100%',
            height: '76px',
            display: 'flex',
            padding: '18px 28px',
            background: theme.white,
            alignItems: 'center',
            borderBottom: '1px solid #D9E4F5'
        },
        headerTitle: {
            color: '#141736',
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 500
        }
    };
});

export const Header = () => {

    const {classes} = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerTitle}>Manage</div>
        </div>
    );
};
