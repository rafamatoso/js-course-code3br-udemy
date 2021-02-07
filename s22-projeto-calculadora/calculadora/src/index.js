import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./view/calculator";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <h1>Calculadora</h1>
      <Calculator></Calculator>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
