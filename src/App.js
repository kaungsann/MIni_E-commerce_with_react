import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CardProvider } from "./Pages/CardProvider";

import ReactRouter from "./ReactRouter";
function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <ReactRouter />
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
