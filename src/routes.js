import React from "react";

import View from "./components/View";
import App from "./App";

import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/product/:id" component={View} />
  </Switch>
)