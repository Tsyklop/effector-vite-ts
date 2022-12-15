import {createStyles, Navbar} from "@mantine/core";
import {Link} from "atomic-router-react";
import React, {useState} from "react";
import {icons} from "@app/shared/assets";
import {SideBarItemType} from "@app/shared/lib/types";

const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        sidebar: {
            transition: 'all .5s ease'
        },
        header: {
            height: '40px',
            position: 'relative',
            marginBottom: '30px',
            paddingBottom: '7px',
        },
        toggleButton: {
            padding: 0,
            width: '28px',
            height: '28px',
            top: '100%',
            right: 0,
            zIndex: 1,
            color: '#141736',
            cursor: 'pointer',
            position: 'absolute',
            transform: 'translate(105%, 10%)',
            background: theme.white,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#D9E4F5',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        logoWrapper: {
            paddingTop: '11px',
            paddingBottom: '11px',
        },
    };
});

const itemUseStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        link: {
            ...theme.fn.focusStyles(),
            color: '#96A9C8',
            display: 'flex',
            padding: '12px',
            fontSize: '14px',
            marginTop: '4px',
            fontWeight: 600,
            alignItems: 'center',
            borderRadius: '16px',
            textDecoration: 'none',
            '&:hover': {
                color: '#1E6AFF',
                backgroundColor: '#F1F5FD',
                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
            '&:first-child': {
                marginTop: '0'
            }
        },
        linkTitle: {},
        linkIcon: {
            ref: icon,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },
        linkActive: {
            '&, &:hover': {
                cursor: 'pointer',
                color: '#1E6AFF',
                backgroundColor: '#F1F5FD',
                /*[`& .${icon}`]: {
                    color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
                },*/
            },
        },
    };
});

function SideBarItem({icon, route, title} : SideBarItemType) {
    const {classes} = itemUseStyles();
    const Icon = icon;
    return (
        <Link to={route}
              className={classes.link}
              activeClassName={classes.linkActive}>
            <Icon className={classes.linkIcon}/>
            <span className={classes.linkTitle}>{title}</span>
        </Link>
    );
}

export const SideBar = ({header, items, footer} : {header?: JSX.Element | null, items: SideBarItemType[], footer?: JSX.Element | null}) => {

    const [expanded, setExpanded] = useState(false);

    const {classes, theme, cx} = useStyles();

    function toggleExpanded() {
        e.preventDefault();
        setExpanded(!expanded);
    }

    return (
        <Navbar p="1.125rem 1rem"
                bg={theme.white}
                width={{base: expanded ? 80 : 212}}
                height='100%'
                className={classes.sidebar}>
            <Navbar.Section grow>
                <div className={classes.header}>
                    <div className={classes.logoWrapper}>
                        <icons.LogoSvg/>
                    </div>
                    <button className={classes.toggleButton}
                            onClick={toggleExpanded}>
                        <icons.light.ArrowLeft/>
                    </button>
                </div>
                {items.map(item => <SideBarItem key={item.title} {...item}/>)}
            </Navbar.Section>
        </Navbar>
    );

    /*return (
        <SidebarMenu hide='md' expand='lg'>
            <SidebarMenu.Collapse getScrollValue={212}>
                <SidebarMenu.Header>
                    <SidebarMenu.Brand>
                        <icons.LogoSvg/>
                    </SidebarMenu.Brand>
                    <SidebarMenu.Toggle as='div'>
                        <icons.light.ArrowLeft/>
                    </SidebarMenu.Toggle>
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    {
                        items.map(item => {
                            return (
                                <SidebarMenu.Nav key={item.title}>
                                    <SidebarMenu.Nav.Link as={Link} to={item.route} activeClassName="sidebar-menu-nav-link-active">
                                        <SidebarMenu.Nav.Icon>
                                            {item.icon()}
                                        </SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>
                                            {item.title}
                                        </SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>
                            );
                        })
                    }
                </SidebarMenu.Body>
            </SidebarMenu.Collapse>
        </SidebarMenu>
    );*/

};
