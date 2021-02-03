import CounterStore from "./counter";
import React from "react";

export const stores = Object.freeze({
  counter: new CounterStore(),
});

export const storeContext = React.createContext(stores);
export const StoreProvider = storeContext.Provider;
