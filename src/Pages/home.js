import { CSSTransitionGroup } from "react-transition-group";
import { FaReact } from "react-icons/fa";
import { Fragment } from "react";
function Home() {
  return (
    <Fragment>
      <span
        style={{
          justifyContent: "center",
          textAlign: "center",
          left: window.innerWidth * 0.05,
          position: "relative",
        }}
      >
        MicroWebKit Home: <br />
        <small
          style={{
            left: window.innerWidth * 0.1,
            position: "relative",
          }}
        >
          {" "}
          {String(window.location.href)}
        </small>
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
              justifyContent: "center",
              textAlign: "center",
              display: "content",
              position: "relative",
              maxWidth: window.innerWidth,
            }}
          >
            <div
              style={{
                border: "5px",
                borderRadius: "25px",
                backgroundColor: "whitesmoke",
              }}
            >
              <span
                style={{
                  border: "5px",
                  borderRadius: "25px",
                  width: "min-content",
                  backgroundColor: "whitesmoke",
                }}
              >
                This website is
                <a href="https://github.com/JasonHoku/MicroWebKit">
                  {" "}
                  Open-Source
                </a>
                ! A cross-platform{" "}
                <a href="https://reactjs.org/docs/create-a-new-react-app.html">
                  ReactApp
                </a>{" "}
                utility by{" "}
                <a href="https://microhawaii.com/">MicroHawaii.com</a>
              </span>
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
                style={{
                  border: "5px",
                  borderRadius: "25px",
                  width: "auto",
                  backgroundColor: "whitesmoke",
                  textAlign: "left",
                  borderSpacing: "15px",
                }}
              >
                <div
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  &nbsp; Working in the most used web development language,
                  worldwide, the MicroWebKit brings features such as: <br />{" "}
                  <br />
                  <li> Live E-Commerce Tools</li>
                  <li> Administration &amp; Moderation Interfaces</li>
                  <li> Live Chat, Event Calendars, Subscription Builders</li>
                  <li> Powerful Analytic Dashboards</li>
                  <li>
                    <a href="https://github.com/JasonHoku/MicroWebKit">
                      And so much more
                    </a>
                    .
                  </li> <br />
                </div>
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
                  For now: <video></video>
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
