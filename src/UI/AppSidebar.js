import React, { Fragment } from "react";
import {
  FaHome,
  FaQuestion,
  FaTools,
  FaArrowsAltV,
  FaEnvelopeOpenText,
  FaWindowClose,
} from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import logo from "../logo.svg";

export default class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarVar: "1",
    };
  }
  openSidebar() {
    document.getElementById("sideIcons").hidden = false;
    document.getElementById("sideIcons2").hidden = false;
    document.getElementById("sideIcons3").hidden = false;
    document.getElementById("sideIcons4").hidden = false;
    document.getElementById("sideIcons5").hidden = false;
    document.getElementById("sideBarHeader").hidden = false;
    document.getElementById("sideBarHeader").hidden = false;

    document.getElementById("SliderCloseIcon").hidden = false;
    document.getElementById("SliderOpenIcon").style.zIndex = 0;
    document.getElementById("SliderOpenIcon").hidden = true;

    let sideBarVar = document.getElementById("appSidebar");
    if (sideBarVar.className.indexOf("appSidebar inactiveSidebar")) {
      sideBarVar.className = "appSidebar active";
    } else {
      sideBarVar.className = "appSidebar active";
    }
  }

  closeSidebar() {
    document.getElementById("sideIcons").hidden = true;
    document.getElementById("sideIcons2").hidden = true;
    document.getElementById("sideIcons3").hidden = true;
    document.getElementById("sideIcons4").hidden = true;
    document.getElementById("sideIcons5").hidden = true;
    document.getElementById("sideBarHeader").hidden = "true";
    document.getElementById("navButton").style.transform = "scale(1.0,1.0)";

    document.getElementById("appSidebar").className =
      "appSidebar inactiveSidebar";

    document.getElementById("SliderCloseIcon").hidden = true;
    document.getElementById("SliderOpenIcon").hidden = false;
  }
  toggleSidebar() {
    if (this.state.sideBarVar === 1) {
      document.getElementById("sideIcons").hidden = true;
      document.getElementById("sideIcons2").hidden = true;
      document.getElementById("sideIcons3").hidden = true;
      document.getElementById("sideIcons4").hidden = true;
      document.getElementById("sideIcons5").hidden = true;
      document.getElementById("sideBarHeader").hidden = "true";
      document.getElementById("navButton").style.transform = "scale(1.0,1.0)";

      document.getElementById("appSidebar").className =
        "appSidebar inactiveSidebar";

      document.getElementById("SliderCloseIcon").hidden = true;
      document.getElementById("SliderOpenIcon").hidden = false;
      this.setState({ sideBarVar: 2 });
    } else {
      document.getElementById("sideIcons").hidden = false;
      document.getElementById("sideIcons2").hidden = false;
      document.getElementById("sideIcons3").hidden = false;
      document.getElementById("sideIcons4").hidden = false;
      document.getElementById("sideIcons5").hidden = false;
      document.getElementById("sideBarHeader").hidden = false;

      document.getElementById("SliderCloseIcon").hidden = false;
      document.getElementById("SliderOpenIcon").style.zIndex = 0;
      document.getElementById("SliderOpenIcon").hidden = true;
      this.setState({ sideBarVar: 1 });
      let sideBarVar = document.getElementById("appSidebar");
      if (sideBarVar.className.indexOf("appSidebar inactiveSidebar")) {
        sideBarVar.className = "appSidebar active";
      } else {
        sideBarVar.className = "appSidebar active";
      }
    }
  }

  render() {
    return (
      <Fragment>
        {
          // Slider Code Section
        }

        <span
          style={{ left: "9px", top: "2px", position: "absolute" }}
          onMouseDown={() => this.toggleSidebar()}
          className="appSidebarSlider"
        >
          <span id="SliderOpenIcon" onMouseDown={() => this.toggleSidebar()}>
            <FaArrowsAltV
              style={{ left: "2px", top: "5px", position: "absolute" }}
              id="navButton"
              size="85%"
              color="lightblue"
              onClick={() => this.toggleSidebar()}
              onMouseDown={() => this.toggleSidebar()}
              alt="More"
            />
          </span>
          <span id="SliderCloseIcon" hidden="true">
            <FaWindowClose
              style={{
                left: "0px",
                zIndex: 102,
                height: "25px",
                top: "0px",
                position: "absolute",
              }}
              id="SliderCloseIcon2"
              size="auto"
              color="lightblue"
              onClick={() => this.toggleSidebar()}
              onMouseDown={() => this.toggleSidebar()}
              alt="More"
            />
          </span>
        </span>
        <div
          style={{
            position: "absolute",
            userSelect: "none",
          }}
          id="sideBarHeader"
          className="sideBarHeader"
          hidden="true"
          onClick={() => this.toggleSidebar()}
          onMouseOver={() => this.openSidebar()}
          onMouseDown={() => this.openSidebar()}
          onMouseLeave={() => this.closeSidebar()}
        >
          {
            // Sidebar Header Section
          }
          <br />
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              width: "75px",
              left: "95px",
              top: "5px",
              position: "absolute",
            }}
          />
          <b
            style={{
              position: "absolute",
              height: "auto",
              left: "65px",
              top: "65px",
              userSelect: "none",
            }}
          >
            MicroWebKit
          </b>
        </div>

        {
          //Sidebar Background Section
        }
        <div
          style={{
            top: "0px",
            zIndex: "98",
            position: "absolute",
            userSelect: "none",
          }}
          onClick={() => this.openSidebar()}
          onMouseOver={() => this.openSidebar()}
          onMouseDown={() => this.openSidebar()}
          onMouseLeave={() => this.closeSidebar()}
          id="appSidebar"
          className="appSidebar inactiveSidebar"
        >
          <div
            className="appSidebarItems"
            style={{
              top: "45px",
              zIndex: 102,
              position: "relative",
              userSelect: "none",
            }}
          >
            {
              //Sidebar List Section
            }
            <div></div>
            <div
              style={{
                position: "relative",
                top: "50px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
              className="horSep"
            >
               
              <a
                onMouseOver={() =>
                  (document.getElementById("sideIcons").hidden = false)
                }
                onMouseLeave={() =>
                  (document.getElementById("sideIcons").hidden = true)
                }
                href="/home"
              >
                <span
                  id="sideIcons"
                  hidden={true}
                  style={{ position: "absolute", left: "75px" }}
                  className="sideIcons zoom"
                >
                  <button> Home </button>
                </span>
                <FaHome
                  width="20px"
                  style={{ position: "relative", left: "7px" }}
                  className="zoom"
                />
              </a>
            </div>

            <div
              style={{
                position: "relative",
                top: "50px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
              className="horSep"
            >
              <a
                onMouseOver={() =>
                  (document.getElementById("sideIcons2").hidden = false)
                }
                onMouseLeave={() =>
                  (document.getElementById("sideIcons2").hidden = true)
                }
                href="/about"
              >
                <span
                  id="sideIcons2"
                  hidden={true}
                  style={{ position: "absolute", left: "75px" }}
                  className="sideIcons2 zoom"
                >
                  <button> About </button>
                </span>
                <FaQuestion
                  width="20px"
                  style={{ position: "relative", left: "11px" }}
                  className="zoom"
                />
              </a>
            </div>
            <div
              style={{
                position: "relative",
                top: "50px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
              className="horSep"
            >
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons3").hidden = false)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons3").hidden = true)
                  }
                  href="/shop"
                >
                  <span
                    id="sideIcons3"
                    hidden={true}
                    style={{ position: "absolute", left: "75px" }}
                    className="sideIcons3 zoom"
                  >
                    <button> Shop </button>
                  </span>
                  <GiShop
                    width="20px"
                    style={{ position: "relative", left: "11px" }}
                    className="zoom"
                  />
                </a>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                top: "50px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
              className="horSep"
            >
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons4").hidden = false)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons4").hidden = true)
                  }
                  href="/login"
                >
                  <span
                    id="sideIcons4"
                    hidden={true}
                    style={{ position: "absolute", left: "75px" }}
                    className="sideIcons4 zoom"
                  >
                    <button> Login </button>
                  </span>
                  <FaTools
                    width="20px"
                    style={{ position: "relative", left: "11px" }}
                    className="zoom"
                  />
                </a>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                top: "50px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
              className="horSep"
            >
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons5").hidden = false)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons5").hidden = true)
                  }
                  href="/contact"
                >
                  <span
                    id="sideIcons5"
                    hidden={true}
                    style={{ position: "absolute", left: "75px" }}
                    className="sideIcons5 zoom"
                  >
                    <button> Contact </button>
                  </span>
                  <FaEnvelopeOpenText
                    width="20px"
                    style={{ position: "relative", left: "11px" }}
                    className="zoom"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
