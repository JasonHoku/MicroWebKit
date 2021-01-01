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
                This website is{" "}
                <a href="https://github.com/JasonHoku/MicroWebKit">
                  Open-Source
                </a>
                ! A cross-platform utility showcase by{" "}
                <a href="https://microhawaii.com/">MicroHawaii.com</a>
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            >
              <a href="/contact">
                <FaRegEnvelopeOpen
                  size="75px"
                  className="frontIcons"
                  alt="logo"
                  style={{
                    height: "125px",
                    color: "rgb(35, 22, 156)",
                    marginTop: "15px",
                    marginBottom: "5px",
                    position: "relative",
                  }}
                />
              </a>
              <a href="/login">
                <FaKey
                  size="75px"
                  className="frontIcons2 "
                  alt="logo"
                  style={{
                    height: "125px",
                    marginLeft: window.innerWidth * 0.05,
                    marginRight: window.innerWidth * 0.05,
                    color: "rgb(35, 22, 156)",
                    position: "relative",
                  }}
                />
              </a>
              <a href="/about">
                <FaInfoCircle
                  size="75px"
                  className="frontIcons"
                  alt="logo"
                  style={{
                    height: "125px",
                    color: "rgb(35, 22, 156)",
                    position: "relative",
                  }}
                />
              </a>
            </div>
            <div
              style={{
                textAlign: "center",
                marginLeft: "15px",
                marginRight: "15px",
                top: "-33px",
                left: "-5px",
                position: "relative",
              }}
            >
              <small>
                <a href="/contact">Contact </a>
                <span
                  style={{
                    height: "125px",
                    width: "75px",
                    marginLeft: "55px",
                    marginRight: "55px",
                    position: "relative",
                  }}
                >
                  <a href="/login">Login </a>
                </span>

                <a href="/about">About</a>
              </small>
            </div>
            <br />
            <div
              className="midBlurb"
              style={{
                border: "5px",
                borderRadius: "25px",
                width: "auto",
                textAlign: "center",
                marginLeft: "15px",
                borderSpacing: "15px",
              }}
            >
              <div
                style={{
                  marginLeft: "15px",
                  top: "15px",
                  position: "relative",
                  marginRight: "15px",
                }}
              >
                <div className="horSepPage">
                  &nbsp;MicroWebKit brings features such as:{" "}
                </div>
                <br /> <br />
                <div
                  style={{
                    border: "5px",
                    borderRadius: "25px",
                    backgroundColor: "transparent",
                    width: "auto",
                    textAlign: "left",
                    marginLeft: "15px",
                    borderSpacing: "15px",
                  }}
                >
                  <li> Live E-Commerce Tools</li>
                  <li> Administration Interface</li>
                  <li> Live Chat, Event Calendars</li>
                  <li> Powerful Analytic Dashboards</li>
                  <br />
                  <a href="https://github.com/JasonHoku/MicroWebKit">
                    And so much more.
                  </a>
                  <br />
                </div>
                <br />
              </div>
            </div>
          </span>
          <br />
          <span
            style={{
              width: "min-content",
              textAlign: "center",
            }}
          >
            <div
              style={{
                marginLeft: "15px",
                marginRight: "15px",
              }}
            >
              <img
                src="/Logo300.png"
                width="150px"
                alt="logo"
                className="App-logo2"
                size="50px"
              />
              <br />
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "15px",
                  marginRight: "15px",
                }}
              ></div>
            </div>
          </span>
          <br />
          <span
            style={{
              border: "5px",
              borderRadius: "25px",
              width: "min-content",
              backgroundColor: "whitesmoke",
            }}
          >
            <div
              style={{
                border: "5px",
                borderRadius: "25px",
                width: "auto",
                backgroundColor: "whitesmoke",
                textAlign: "center",
                borderSpacing: "15px",
              }}
            >
              <div
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                }}
              >
                <a href="https://microhawaii.com/">
                  Check out the founding organization: MicroHawaii.com
                </a>
                <br />
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "15px",
                  marginRight: "15px",
                }}
              ></div>
            </div>
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br />
          </span>
        </CSSTransitionGroup>
      </CSSTransitionGroup>
      <div className="HomeFooter fadeIn">
        <div
          style={{
            textAlign: "center",
            paddingLeft: "55px",
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
