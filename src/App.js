import React from "react";
import { app } from "./App.module.scss";

function App() {
  const message = "Hello Worldx";
  return <div className={app}>{message}</div>;
}

export default App;
