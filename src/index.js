import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.render(<App />, document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
