
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AppState, Observer, Screens, Actions} from "../types/store";
import { reducer } from "./reducer";
import { initializeApp } from "firebase/app";
import { Navigate, setUserCredentials } from "./actions";
import Storage, { PersistanceKeys } from "../utils/storage";
import firebaseconfig from "../utils/firebaseconfig";

const emptyState: AppState = {
  User: {
    name: "",
    image: "",
    description: "",
    gameprofile: "",
    email: "",
    uid: "",
    password: "",
  },
  screen: Screens.LANDING,
  post: [],
  Postt: [],
  UserCredentials: "",
};


const app = initializeApp(firebaseconfig);
const auth = getAuth(app);

onAuthStateChanged(auth, async(u:any) => {
  
  if (await (u)) {
    u !== null ? (setUserCredentials(u)) : '';
    appState.User.uid = u.uid
    dispatch(Navigate(Screens.DASHBOARD));
  } else {
    dispatch(Navigate(Screens.LANDING));
  }
});
  
export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

  let observers: Observer[] = [];
  
  const notifyObservers = () => observers.forEach((o) => o.render());
  

  const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

 export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};
  
  export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
  };
