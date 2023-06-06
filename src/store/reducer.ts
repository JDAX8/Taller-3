  import { AppState, AuthAction, NavigationActions, UserActions, PostupAction } from "../types/store";
  import { Actions } from "../types/store";



  export const reducer = (ac: Actions, State: AppState ): AppState => {
    const { action, payload } = ac; 
    
    switch (action) {
      case PostupAction.SAVE_POST:
        State.Postt = {...State.Postt, payload};
        return State;

        default:
          return State;
          
      }


      switch (action) {
        case NavigationActions.NAVIGATE:
          return {
            ...State,
            screen: payload,
        }
        case AuthAction.LOGOUT: 
            return {
                ...State , UserCredentials:""
            }
    
          case UserActions.ADDUSER:
            State.User = payload;
            break;

            case UserActions.EDITPROFILE:
              State.User = payload
              return State

          case UserActions.GETUSER:
            State.User = payload;
            return State
      
      }
    
      return State;
    };