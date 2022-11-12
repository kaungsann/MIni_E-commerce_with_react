import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LoginProvider } from "./LoginProvider";
import { CardProvider } from "./Pages/CardProvider";

import ReactRouter from "./ReactRouter";
function App() {
  return (
    <LoginProvider>
      <CardProvider>
        <BrowserRouter>
          <ReactRouter />
        </BrowserRouter>
      </CardProvider>
    </LoginProvider>
  );
}

export default App;
