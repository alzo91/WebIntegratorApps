import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Singin from "../pages/Singin";
import Singup from "../pages/Singup";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Application from "../pages/Application";
import Devices from "../pages/Devices";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Singin} />
      <Route exact path="/Singup" component={Singup} />

      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Application" component={Application} />
      <Route exact path="/Devices" component={Devices} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
