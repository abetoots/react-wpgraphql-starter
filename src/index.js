import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

//Root
import "./fontawesome";
import "./typography";
import App from "./App";

const target = document.querySelector("#root");
if (target) {
  ReactDOM.render(<App />, target);
}
