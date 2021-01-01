import React, { Fragment } from "react";
import logo from "../logo.svg";

import { FaSuperpowers } from "react-icons/fa";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSearch: false,
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <span className="appHeader" style={{ height: "35px" }}>
            <span className="headerFont">
              <FaSuperpowers
                color="black"
                className="App-logo"
                alt="logo"
                style={{ height: "30px" }}
              />
              MicroWebKit
            </span>
          </span>
        </div>
      </Fragment>
    );
  }
}

export default AppHeader;
