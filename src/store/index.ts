
import { Screens } from "../types/navigations"
import { Observer } from "../types/store";
import { reducer } from "./reducer";

const emptyState = {
    screen: Screens.LANDING,
  };
  
  export let appState = emptyState;
  
  let observers: Observer[] = [];
  
  const notifyObservers = () => observers.forEach((o) => o.render());
  
  export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;
    notifyObservers();
  };
  
  export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
  };