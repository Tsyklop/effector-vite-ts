import {ServerConfigType, ViewerType} from "@app/shared/lib/types";

export const mockUser: ViewerType = {
    name: "admin",
    role: 'ADMIN',
    email: "admin",
};

export const mockUserResponse = {
    ...mockUser
};

export const mockServerConfigResponse : ServerConfigType = {
    test: true
};

export const mockSignInResponse: ViewerType = {
    ...mockUser
};
