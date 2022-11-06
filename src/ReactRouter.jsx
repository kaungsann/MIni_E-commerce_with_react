import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Order from "./Pages/Order";
import Setting from "./Pages/Setting";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";

export default function ReactRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/shop">
          <Shop />
        </Route>

        <Route path="/order">
          <Order />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}
