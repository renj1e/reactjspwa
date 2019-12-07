import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopBar from "./components/global/SBMenu/TopBar";
import LSBar from "./components/global/SBMenu/LSBar";

import ADashboard from "./views/Analytics/Dashboard";
import ACustomers from "./views/Analytics/Customers";
import AReports from "./views/Analytics/Reports";

import Crypto from "./views/Crypto";

const routes = [
  {
    path: "/crypto",
    component: Crypto,
    routes: []
  },
  {
    path: "/analytics/customers",
    component: ACustomers,
    routes: []
  },
  {
    path: "/analytics/reports",
    component: AReports,
    routes: []
  },
  {
    path: "/analytics/dashboard",
    component: ADashboard,
    routes: []
  }
];


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <div className="page-wrapper">
          <Router>
            <LSBar {...this.props} />
            <div className="page-content">
            <Switch>
              {routes.map((route, i) => (
                <Route key={i}
                  path={route.path}
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              ))}
            </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
