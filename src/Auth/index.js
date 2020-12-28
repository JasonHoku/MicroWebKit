import React from "react";
import AuthAct from "./auth.js";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }
  render() {
    return <AuthAct />;
  }
}
export default Auth;
