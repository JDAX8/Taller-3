import { Actions, Appstate, PostupAction } from "../types/store";

export const reducer = (action: any, prevState: any, state:Appstate) => {
    switch (action.type) {
      case "NAVIGATE":
        prevState.screen = action.payload;
        break;


      case "SETUSER":
      prevState.user = action.payload;
      break;
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