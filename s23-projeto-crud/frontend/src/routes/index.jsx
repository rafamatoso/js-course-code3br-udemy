import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/Home";
import Users from "../components/Users";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/users" component={Users}></Route>
    <Redirect from="*" to="/"></Redirect>
  </Switch>
);
