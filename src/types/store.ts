import {user} from "./psb"
import {trip} from "./trips"

export type Observer = { render: () => void } & HTMLElement;

export type Appstate= {
    user: user | null,
    post: trip []
}

export type observer = ({render: () => void} & HTMLElement);


export enum AuthAction{
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}


export interface logInAction{
    action: AuthAction.LOGIN,
    payload: user
}

export type Actions = logInAction;