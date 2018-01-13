import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/header";
import { Main } from "./components/main";
import "./styles/appstyles.scss";

const template =
<BrowserRouter>
    <div>
      <Header></Header>
      <Main></Main>
    </div>
</BrowserRouter>;

const root = document.getElementById("main");
ReactDOM.render(template, root);
