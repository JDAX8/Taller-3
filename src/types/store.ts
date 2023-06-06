import { Postt } from "./Postt";
import { trip } from "./trips";
import { users } from "./user";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: Screens;
  post: trip[];
  Postt: Postt[];
  UserCredentials: string;
  User: users;
};


export enum Screens {
    REGISTER = "REGISTER",
    LOGIN = "LOGIN",
    DASHBOARD = "DASHBOARD",
    FINDPLAYER = "FINDPLAYER",
    PROFILESCREEN = "PROFILESCREEN",
    SEARCHBAR = "SEARCHBAR",
    LANDING = "LANDING",
    SHARE = "SHARE",
    EDITPROFILE = "EDITPROFILE"
  }
export enum NavigationActions{
    "NAVIGATE"="NAVIGATE",
  }

export enum AuthAction {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export enum UserActions {
  ADDUSER = "ADDUSER",
  GETUSER = "GETUSER",
  SETUSER = "SETUSER",
  EDITPROFILE = "EDITPROFILE",
  LOGOUT = "LOGOUT",
  SETCREDETIALS = "SETCREDETIALS"
}

export enum PostupAction {
  SAVE_POST = "SAVE_POST",
}

export interface SavePostAction {
  action: PostupAction.SAVE_POST;
  payload: Postt;
}
export interface ActionLogOut {
    action: AuthAction.LOGOUT,
    payload: void
}

export interface logInAction {
  action: AuthAction.LOGIN;
  payload: users;
}

export interface ADDUserAction {
  action: UserActions.ADDUSER;
  payload: users;
}

export interface GetUser {
  action: UserActions.GETUSER;
  payload: users;
}

export interface EditProfileAction {
  action: UserActions.EDITPROFILE;
  payload: users;
}
export interface ActionNavigation{
    action: NavigationActions.NAVIGATE;
    payload: Screens;
  }

  export interface SetCredentialsAction {
    action: UserActions.SETCREDETIALS,
    payload: String
  }
  
export type Actions = ActionLogOut |SetCredentialsAction | ActionNavigation | logInAction| GetUser | ADDUserAction| EditProfileAction | SavePostAction;
