import {createEffect, createStore} from "effector";
import {getServerConfig} from "@app/shared/api/common.js";
import {ServerConfigType} from "@app/shared/lib/types";

export const getServerConfigFx = createEffect<void, ServerConfigType>(async () => {
    return await getServerConfig();
});

export const serverConfig = createStore<ServerConfigType | null>(null, {name: 'server-config'})
    .on(getServerConfigFx.doneData, (_, serverConfig) => serverConfig);
