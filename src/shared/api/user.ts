import {mockUserResponse} from "@app/shared/api/mock";

export function getUserData() {
    return Promise.resolve(mockUserResponse);
}
