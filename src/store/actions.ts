import { Actions, EditProfileAction, GetUser, ActionNavigation, NavigationActions, ADDUserAction, PostupAction, UserActions,Screens, ActionLogOut, logInAction, AuthAction, SetCredentialsAction } from "../types/store";
import firebase from "../utils/firebase";
import { Postt } from '../types/Postt';
import { appState, dispatch } from '.';
import { users } from "../types/user";
import { onAuthStateChanged } from "firebase/auth";

export const setUserCredentials = (user: string) => {
  return {
    type: "SETUSER",
    payload: user,
  };
} 
export const SavePost = async (Postt: Postt): Promise<Actions> => {
   await firebase.SavePostInDB(Postt);
  return {
    action: PostupAction.SAVE_POST,
    payload: Postt,
  };
};

export const Logout =  ():ActionLogOut =>{

  if(appState.UserCredentials !==null || ''){
  (setUserCredentials(''))    
  sessionStorage.clear()
  dispatch(Navigate(Screens.LOGIN))
  location.reload()
}


return{
action: AuthAction.LOGOUT,
payload: undefined,
}
}

export const Navigate = (screen:Screens): ActionNavigation =>{
  return{
      action: NavigationActions.NAVIGATE,
      payload: screen,
  }
}


export const UserLogin = async (): Promise<logInAction> =>{
  onAuthStateChanged
  const user = await firebase.GetUserFromDB()
  location.reload()
  console.log(user)
  return{
      action: AuthAction.LOGIN,
      payload: user,
  }
}
export const newUser = (user:users): ADDUserAction =>{
  return{
      action: UserActions.ADDUSER,
      payload: user,
  }
}
export const getuser = async (): Promise <GetUser> => {
  const userss = await firebase.GetUserFromDB()
  return {
      action: UserActions.GETUSER,
      payload: userss,
  }
}
export const EditProfile = async (User:users): Promise<EditProfileAction> =>{

  await firebase.EditprofileDB(User)

  return{
      action: UserActions.EDITPROFILE,
      payload: User,
  }
}

