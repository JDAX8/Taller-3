import { Screens } from "../types/navigations";

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
};