import { Postt } from "../types/Postt";
import { Screens } from "../types/navigations";
import { Actions, PostupAction } from "../types/store";

export const savePost = (Postt: Postt): Actions => {
    return{
      action: PostupAction.SAVE_POST,
      payload: Postt
    }
}

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};
export const setUserCredentials = (user: string) => {
  return {
    type: "SETUSER",
    payload: user,
  };
//   export const setUserCredentials = (user: string) => {
//   return {
//     type: "SETUSER",
//     payload: user,
//   };
// };
}