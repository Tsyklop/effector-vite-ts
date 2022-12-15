//import {RouteInstance} from "atomic-router";
import {createRoute} from "atomic-router";
import {FunctionComponent, SVGProps} from "react";

export type RouteInstance = ReturnType<typeof createRoute>;

export type RoleType = 'ADMIN' | 'USER' | 'TEACHER';

export type MessageType = {
    message: string
};

export type ToastType = {
    type: 'info' | 'warn' | 'error' | 'success',
    message: string
}

export type ViewerType = {
    role: RoleType,
    name: string,
    email: string
};

export type SignInParamsType = {
    email: string,
    password: string
};

export type SideBarItemType = {
    icon: FunctionComponent<SVGProps<SVGSVGElement>>,
    route: RouteInstance,
    title: string
};

export type ServerConfigType = {
    test: boolean
};


