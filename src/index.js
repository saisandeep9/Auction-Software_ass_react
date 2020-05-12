import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
