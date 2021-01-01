import { CSSTransitionGroup } from "react-transition-group";
import {
  FaReact,
  FaInfoCircle,
  FaKey,
  FaRegEnvelopeOpen,
} from "react-icons/fa";
import { Fragment } from "react";
function Home() {
  return (
    <Fragment>
      <span
        style={{
          justifyContent: "center",
          textAlign: "center",
          left: window.innerWidth * 0.01,
          position: "relative",
        }}
      >
        <b>MicroWebKit.com</b> &gt;{" "}
        <b>
          <small
            style={{
              fontSize: "14px",
              top: "-1px",
              position: "relative",
            }}
          >
            {String(window.location.href)}
          </small>
        </b>
        <br />
        <br />
      </span>
      <CSSTransitionGroup
        component="span"
        transitionName="MainAnimation"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={true}
        transitionEnterTimeout={2000}
        transitionLeave={false}
      >
        <CSSTransitionGroup
          component="div"
          transitionName="MainAnimation"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={true}
          transitionEnterTimeout={2000}
          transitionLeave={false}
        >
          <span
            style={{
              border: "5px",
              borderRadius: "25px",
            }}
          >
            <div
              className="midBlurb"
              style={{
                border: "5px",
                borderRadius: "25px",
                width: "80%",
                left: window.outerWidth * 0.08,
                position: "relative",
                textAlign: "center",
                borderSpacing: "15px",
              }}
            >
              <div style={{}}>
                <div className="horSepPage">Welcome to MicroWebKit</div>
                <br />
                Shop Features Coming Soon.
                <br />
                <br /> 1/1/21
              </div>
            </div>
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
          </span>
        </CSSTransitionGroup>
      </CSSTransitionGroup>
      <div
        className="HomeFooter "
        style={{ position: "absolute", bottom: "0" }}
      >
        <div
          style={{
            textAlign: "center",
            paddingLeft: "50px",
          }}
        >
          MicroWebKit® 2020 <br />
          <br />
          <a href="MicroHawaii.com">MicroHawaii.com</a> +{" "}
          <a href="PrettyCoolPattern.com"> PrettyCoolPattern</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
