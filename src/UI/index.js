import React, { Fragment } from "react";
import AppHeader from "./AppHeader.js";
import AppSidebar from "./AppSidebar.js";
import { Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "../Pages/home";
import About from "../Pages/about";
import Shop from "../Pages/shop";
import Login from "../Pages/login";
import Contact from "../Pages/contact";

class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }
  render() {
    return (
      <Fragment>
        <AppHeader />
        <AppSidebar />
        <BrowserRouter>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <div className="app-content">
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default UI;
