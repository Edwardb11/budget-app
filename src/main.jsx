import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReloadPrompt from "./ReloadPrompt";

ReactDOM.render(
  <React.StrictMode>
    <ReloadPrompt />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
