import { CSSTransitionGroup } from "react-transition-group";
import { FaReact, Fa500Px } from "react-icons/fa";
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
        <b>MicroWebKit</b> &gt;
        <b>
          <small
            style={{
              fontSize: "14px",
              top: "-4px",
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
              backgroundColor: "whitesmoke",
            }}
          >
            <div
              style={{
                border: "5px",
                borderRadius: "25px",
                width: "80%",
                backgroundColor: "whitesmoke",
                left: window.outerWidth * 0.08,
                position: "relative",
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
                Welcome to MicroWebKit
                <br />
                <br />
                This website is{" "}
                <a href="https://github.com/JasonHoku/MicroWebKit">
                  Open-Source
                </a>
                ! A cross-platform utility by{" "}
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
              <FaReact
                size="35px"
                className="App-logo"
                alt="logo"
                style={{
                  height: "75px",
                  color: "rebeccapurple",
                  position: "relative",
                }}
              />
            </div>
            <span
              style={{
                border: "5px",
                borderRadius: "25px",
                width: "min-content",
                backgroundColor: "whitesmoke",
              }}
            >
              <div
                className="midBlurb"
                style={{
                  border: "5px",
                  borderRadius: "25px",
                  width: "auto",
                  textAlign: "center",
                  marginLeft: "55px",
                  marginRight: "85px",
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
                  &nbsp; Working in the most used web development language,
                  worldwide, the MicroWebKit brings features such as: <br />{" "}
                  <br />
                  <div
                    style={{
                      border: "5px",
                      borderRadius: "25px",
                      backgroundColor: "transparent",
                      width: "auto",
                      textAlign: "left",
                      marginLeft: "55px",
                      marginRight: "75px",
                      borderSpacing: "15px",
                    }}
                  >
                    <li> Live E-Commerce Tools</li>
                    <li> Administration &amp; Moderation Interfaces</li>
                    <li> Live Chat, Event Calendars, Subscription Builders</li>
                    <li> Powerful Analytic Dashboards</li>
                    <li>
                      <a href="https://github.com/JasonHoku/MicroWebKit">
                        And so much more
                      </a>
                      .
                    </li>
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
                  For now:{" "}
                  <a href="https://microhawaii.com/">
                    Check out the founding organization at MicroHawaii.com
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
            </span>
          </span>
        </CSSTransitionGroup>
      </CSSTransitionGroup>
    </Fragment>
  );
}

export default Home;
