import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from './Route';

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

      <Route exact path="/Dashboard" component={Dashboard} isPrivate/>
      <Route exact path="/Profile" component={Profile} isPrivate/>
      <Route exact path="/Application" component={Application} isPrivate/>
      <Route exact path="/Devices" component={Devices} isPrivate/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
