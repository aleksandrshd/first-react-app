import React, {createContext} from "react";
import store from "./redux/reduxStore";
import App from "./App";

export const StoreContext = createContext({});

export const Provider = ({store, children}) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}