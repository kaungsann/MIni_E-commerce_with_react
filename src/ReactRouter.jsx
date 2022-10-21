import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Order from "./Pages/Order";
import Setting from "./Pages/Setting";
export default function ReactRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/shop">
          <Shop />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/setting">
          <Setting />
        </Route>
      </Switch>
    </>
  );
}
