import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route , Switch } from "react-router-dom";

import {AboutUs } from "../pages/aboutus";
import { Edit } from "../pages/edit";
import { Home } from "../pages/home";

export class Main extends React.Component {
    public render() {
        return <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/edit" component={Edit}/>
        <Route path="/about" component={AboutUs}/>
      </Switch>;
    }

}
