import {mockServerConfigResponse} from "@app/shared/api/mock";
import {ServerConfigType} from "../lib/types";

export function getServerConfig() : Promise<ServerConfigType> {
    return Promise.resolve(mockServerConfigResponse);
}
