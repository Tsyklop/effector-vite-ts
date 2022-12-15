import React, {ReactNode} from "react";
import {Helmet} from "react-helmet-async";
import {icons} from "@app/shared/assets/index.js";
import {routes} from "@app/shared/lib/routes";
import {SideBarItemType} from "@app/shared/lib/types";
import {Header, SideBar} from "@app/shared/ui/index.js";
import {ProtectedLayout} from "@app/shared/ui/templates";

const menus = [
    {
        icon: icons.bulk.DashboardSvg,
        route: routes.protected.manage.dashboard,
        title: 'Dashboard'
    },
    {
        icon: icons.bulk.UsersSvg,
        route: routes.protected.manage.users,
        title: 'Users'
    },
    {
        icon: icons.bulk.GroupsSvg,
        route: routes.protected.manage.groups,
        title: 'Groups'
    },
    {
        icon: icons.bulk.DisciplinesSvg,
        route: routes.protected.manage.disciplines,
        title: 'Disciplines'
    },
    {
        icon: icons.bulk.CoursesSvg,
        route: routes.protected.manage.courses,
        title: 'Courses'
    },
    {
        icon: icons.bulk.PlansSvg,
        route: routes.protected.manage.plans,
        title: 'Plans'
    },
    {
        icon: icons.bulk.LocationsSvg,
        route: routes.protected.manage.locations,
        title: 'Locations'
    },
    {
        icon: icons.bulk.ClassroomsSvg,
        route: routes.protected.manage.classrooms,
        title: 'Classrooms'
    }
] as SideBarItemType[];

export function ManageLayout ({children} : {children: ReactNode}) {
    return (
        <>

            <Helmet title='Manage'/>

            <ProtectedLayout sidebar={<SideBar items={menus}/>} header={<Header/>}>
                {children}
            </ProtectedLayout>

        </>
    );
}
