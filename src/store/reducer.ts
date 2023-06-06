import { appState } from ".";
import { Actions, Appstate, PostupAction } from "../types/store";

export const reducer = (action: any, prevState: any) => {
  const {Actions, payload} = action;

    switch(action){
      case PostupAction.SAVE_POST:
        prevState = [...prevState.Postt, payload];
        return prevState;


        default:
          return prevState;

    }

    switch (action.type) {
      case "NAVIGATE":
        prevState.screen = action.payload;
        break;


      case "SETUSER":
      prevState.user = action.payload;
      break;
    }
  
    return prevState;
  };