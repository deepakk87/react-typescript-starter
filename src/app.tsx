import * as history from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router } from "react-router-dom";
import { Header } from "./components/header";
import { Main } from "./components/main";

import "./styles/appstyles.scss";

const historyObj =  history.createBrowserHistory();
const template =
<Router history={historyObj} >
    <div>
      <Header history = {historyObj} brand = {"PSRocks"}></Header>
      <div className="container">
          <Main></Main>
      </div>
    </div>
</Router>;

const root = document.getElementById("main");
ReactDOM.render(template, root);
