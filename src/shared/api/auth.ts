import {mockSignInResponse, mockUser} from "@app/shared/api/mock";
import {MessageType, SignInParamsType, ViewerType} from "@app/shared/lib/types";

export function signInUser(data: SignInParamsType): Promise<ViewerType> {
    if (data.email === mockUser.email && data.password === "12345") {
        return Promise.resolve(mockSignInResponse);
    }
    return Promise.reject({message: "Error when auth"});
}

export function signOutUser() : Promise<{ message: string }> {
    return Promise.resolve({message: "OK"});
}

export function forgotPassword(email: string) : Promise<MessageType> {
    if (email === mockUser.email) {
        return Promise.resolve({
            message: 'ok'
        });
    }
    return Promise.reject({message: "Error when auth"});
}
