import { Postt } from "./Postt";
import {user} from "./psb"
import {trip} from "./trips"

export type Observer = { render: () => void } & HTMLElement;

export type Appstate= {
    user: user | null,
    post: trip [],
    Postt: Postt []
}

export type observer = ({render: () => void} & HTMLElement);


export enum AuthAction{
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum PostupAction {
    "SAVE_POST" = "SAVE_POST",
}

export interface savePost{
    action: PostupAction.SAVE_POST;
    payload: Postt;
}
export interface logInAction{
    action: AuthAction.LOGIN,
    payload: user
}

export type Actions = logInAction | savePost;