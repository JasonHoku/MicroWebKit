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
    document.getElementById("sideIcons").style.opacity = 1;
    document.getElementById("sideIcons2").style.opacity = 1;
    document.getElementById("sideIcons3").style.opacity = 1;
    document.getElementById("sideIcons4").style.opacity = 1;
    document.getElementById("sideIcons5").style.opacity = 1;
    document.getElementById("sideBarHeader").hidden = false;

    document.getElementById("SliderCloseIcon").hidden = false;
    document.getElementById("SliderOpenIcon").style.zIndex = 0;
    document.getElementById("SliderOpenIcon").hidden = true;

    let sideBarVar = document.getElementById("appSidebar");
    if (sideBarVar.className.indexOf("appSidebar inactive")) {
      sideBarVar.className = "appSidebar active";
    } else {
      sideBarVar.className = "appSidebar active";
    }
  }

  closeSidebar() {
    document.getElementById("sideIcons").style.opacity = 0;
    document.getElementById("sideIcons2").style.opacity = 0;
    document.getElementById("sideIcons3").style.opacity = 0;
    document.getElementById("sideIcons4").style.opacity = 0;
    document.getElementById("sideIcons5").style.opacity = 0;
    document.getElementById("sideBarHeader").hidden = "true";
    document.getElementById("navButton").style.transform = "scale(1.0,1.0)";

    document.getElementById("appSidebar").className = "appSidebar inactive";

    document.getElementById("SliderCloseIcon").hidden = true;
    document.getElementById("SliderOpenIcon").hidden = false;
  }
  toggleSidebar() {
    if (this.state.sideBarVar === 1) {
      document.getElementById("sideIcons").style.opacity = 0;
      document.getElementById("sideIcons2").style.opacity = 0;
      document.getElementById("sideIcons3").style.opacity = 0;
      document.getElementById("sideIcons4").style.opacity = 0;
      document.getElementById("sideIcons5").style.opacity = 0;
      document.getElementById("sideBarHeader").hidden = "true";
      document.getElementById("navButton").style.transform = "scale(1.0,1.0)";

      document.getElementById("appSidebar").className = "appSidebar inactive";

      document.getElementById("SliderCloseIcon").hidden = true;
      document.getElementById("SliderOpenIcon").hidden = false;
      this.setState({ sideBarVar: 2 });
    } else {
      document.getElementById("sideIcons").style.opacity = 1;
      document.getElementById("sideIcons2").style.opacity = 1;
      document.getElementById("sideIcons3").style.opacity = 1;
      document.getElementById("sideIcons4").style.opacity = 1;
      document.getElementById("sideIcons5").style.opacity = 1;
      document.getElementById("sideBarHeader").hidden = false;

      document.getElementById("SliderCloseIcon").hidden = false;
      document.getElementById("SliderOpenIcon").style.zIndex = 0;
      document.getElementById("SliderOpenIcon").hidden = true;
      this.setState({ sideBarVar: 1 });
      let sideBarVar = document.getElementById("appSidebar");
      if (sideBarVar.className.indexOf("appSidebar inactive")) {
        sideBarVar.className = "appSidebar active";
      } else {
        sideBarVar.className = "appSidebar active";
      }
    }
  }

  render() {
    return (
      <Fragment>
        <span
          onMouseDown={() => this.toggleSidebar()}
          className="appSidebarSlider"
        >
          <span id="SliderOpenIcon" onMouseDown={() => this.toggleSidebar()}>
            <FaArrowsAltV
              style={{ left: "0px", top: "0px", position: "absolute" }}
              id="navButton"
              size="auto"
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
        <span
          id="sideBarHeader"
          style={{ left: "45px", userSelect: "none" }}
          className="sideBarHeader"
          hidden="true"
          onClick={() => this.toggleSidebar()}
          onMouseOver={() => this.openSidebar()}
          onMouseDown={() => this.openSidebar()}
          onMouseLeave={() => this.closeSidebar()}
        >
          <br />
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ height: "30px" }}
          />
          <b>OmniWeb</b>
        </span>
        <div
          onClick={() => this.openSidebar()}
          onMouseOver={() => this.openSidebar()}
          onMouseDown={() => this.openSidebar()}
          onMouseLeave={() => this.closeSidebar()}
          id="appSidebar"
          className="appSidebar inactive"
        >
          <div className="appSidebarItems">
            <div className="horSep">
               
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons").style.opacity = 1)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons").style.opacity = 0)
                  }
                  href="/home"
                >
                  <span
                    id="sideIcons"
                    style={{ opacity: 0, position: "absolute", left: "25px" }}
                    className="sideIcons zoom"
                  >
                    <button> Home </button>
                  </span>
                  <FaHome className="zoom" />
                </a>
              </div>
            </div>

            <div className="horSep">
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons2").style.opacity = 1)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons2").style.opacity = 0)
                  }
                  href="/about"
                >
                  <span
                    id="sideIcons2"
                    style={{ opacity: 0, position: "absolute", left: "25px" }}
                    className="sideIcons2 zoom"
                  >
                    <button> About </button>
                  </span>
                  <FaQuestion className="zoom" />
                </a>
              </div>
            </div>
            <div className="horSep">
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons3").style.opacity = 1)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons3").style.opacity = 0)
                  }
                  href="/shop"
                >
                  <span
                    id="sideIcons3"
                    style={{ opacity: 0, position: "absolute", left: "25px" }}
                    className="sideIcons3 zoom"
                  >
                    <button> Shop </button>
                  </span>
                  <GiShop className="zoom" />
                </a>
              </div>
            </div>
            <div className="horSep">
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons4").style.opacity = 1)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons4").style.opacity = 0)
                  }
                  href="/login"
                >
                  <span
                    id="sideIcons4"
                    style={{ opacity: 0, position: "absolute", left: "25px" }}
                    className="sideIcons4 zoom"
                  >
                    <button> Login </button>
                  </span>
                  <FaTools className="zoom" />
                </a>
              </div>
            </div>
            <div className="horSep">
              <div>
                <a
                  onMouseOver={() =>
                    (document.getElementById("sideIcons5").style.opacity = 1)
                  }
                  onMouseLeave={() =>
                    (document.getElementById("sideIcons5").style.opacity = 0)
                  }
                  href="/contact"
                >
                  <span
                    id="sideIcons5"
                    style={{ opacity: 0, position: "absolute", left: "25px" }}
                    className="sideIcons5 zoom"
                  >
                    <button> Contact </button>
                  </span>
                  <FaEnvelopeOpenText className="zoom" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
