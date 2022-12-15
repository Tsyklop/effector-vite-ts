import {redirect} from "atomic-router";
import {split} from "effector";
import {viewerModel} from "@app/entities/viewer";
import {authByEmailModel} from "@app/features/auth";
import {routes} from "@app/shared/lib/routes";
import {ViewerType} from "@app/shared/lib/types";

redirect({
    clock: authByEmailModel.signOutUserFx.done,
    route: routes.auth.signIn,
});

split({
    clock: viewerModel.viewerSignInDone,
    source: viewerModel.$viewer,
    match: (viewer: ViewerType | null) => {
        return viewer?.role;
    },
    cases: {
        'ADMIN': redirect({route: routes.protected.manage.dashboard}),
        __: redirect({route: routes.home}),
    } as const
});
