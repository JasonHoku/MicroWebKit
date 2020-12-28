import React, { Fragment } from "react";

class AuthAct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSearch: false,
    };
  }

  render() {
    return <Fragment>{console.log("AuthVarZZ")}</Fragment>;
  }
}

export default AuthAct;
