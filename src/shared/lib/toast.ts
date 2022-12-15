import {createEffect, createEvent, sample} from "effector";
import {toast} from "react-toastify";
import {ToastType} from "@app/shared/lib/types";

const options = {};

export const showToast = createEvent<ToastType>();

const showToastFx = createEffect(({type, message}: ToastType) => {
    if (type) {
        toast[type](message, options);
    } else {
        toast(message, options);
    }
});

export const showErrorToast = showToastFx.prepend((message: string) => {
    return {
        type: "error",
        message,
    };
});
export const showSuccessToast = showToastFx.prepend((message: string) => {
    return {
        type: "success",
        message,
    };
});

sample({
    clock: showToast,
    target: showToastFx,
});
