import React from "react";
import { storeContext, stores } from "./index";

export const useStores = () => React.useContext(storeContext);

export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => React.useContext(storeContext)[store];
