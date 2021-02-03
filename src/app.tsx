import React from "react";
import { StoreProvider, stores } from "./store";
import "./app.scss";

const App = (props) => {
  // this.props.children 就是要渲染的页面
  return <StoreProvider value={stores}>{props.children}</StoreProvider>;
};

export default App;
