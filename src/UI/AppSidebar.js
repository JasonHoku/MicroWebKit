import React, { Fragment } from "react";
import {
  FaHome,
  FaQuestion,
  FaTools,
  FaGripLines,
  FaSuperpowers,
  FaEnvelopeOpenText,
  FaWindowClose,
} from "react-icons/fa";
import { GiShop } from "react-icons/gi";

export default class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      sideBarVar: 1,
    };
  }
  openSidebar() {
    if (this.state.sideBarVar === 1) {
      console.log("3");
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
      setTimeout(() => {
        document.getElementById("sidebarBlurb").hidden = false;
        document.getElementById("sidebarBlurb2").hidden = false;
      }, 800);

      if (sideBarVar.className.indexOf("appSidebar inactiveSidebar")) {
        sideBarVar.className = "appSidebar active";
      } else {
        sideBarVar.className = "appSidebar active";
      }
    }
    this.setState({ sideBarVar: 2 });
  }

  closeSidebar() {
    console.log("2");
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
      document.getElementById("sidebarBlurb").hidden = true;
      document.getElementById("sidebarBlurb2").hidden = true;
      setTimeout(() => {
        document.getElementById("sidebarBlurb").hidden = true;
        document.getElementById("sidebarBlurb2").hidden = true;
      }, 800);
    }
    this.setState({ sideBarVar: 2 });
  }
  toggleSidebar() {
    console.log("1");
    if (this.state.sideBarVar === 2) {
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
      document.getElementById("sidebarBlurb").hidden = true;
      document.getElementById("sidebarBlurb2").hidden = true;
      setTimeout(() => {
        document.getElementById("sidebarBlurb").hidden = true;
        document.getElementById("sidebarBlurb2").hidden = true;
      }, 800);
      this.setState({ sideBarVar: 1 });
    }
    if (this.state.sideBarVar === 1) {
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
      setTimeout(() => {
        document.getElementById("sidebarBlurb").hidden = false;
        document.getElementById("sidebarBlurb2").hidden = false;
      }, 800);

      let sideBarVar = document.getElementById("appSidebar");
      if (sideBarVar.className.indexOf("appSidebar inactiveSidebar")) {
        sideBarVar.className = "appSidebar active";
      } else {
        sideBarVar.className = "appSidebar active";
      }
      this.setState({ sideBarVar: 2 });
    }
  }

  componentDidMount() {
    let elementsArray = document.querySelectorAll("appSidebarSlider");

    elementsArray.forEach(function (elem) {
      elem.addEventListener("input", function () {
        console.log("6");
      });
    });
  }
  render() {
    return (
      <Fragment>
        {
          // Slider Code Section
        }

        <span
          style={{ left: "9px", top: "2px", position: "fixed" }}
          className="appSidebarSlider"
          class="appSidebarSlider"
        >
          <span
            id="SliderOpenIcon"
            onMouseDown={() => this.toggleSidebar()}
            style={{ zIndex: 105 }}
          >
            <FaGripLines
              style={{ left: "2px", top: "10px", position: "absolute" }}
              id="navButton"
              size="85%"
              color="lightblue"
              alt="More"
            />{" "}
            <FaGripLines
              style={{ left: "2px", top: "22px", position: "absolute" }}
              id="navButton"
              size="85%"
              color="lightblue"
              alt="More"
            />
          </span>
          <span
            id="SliderCloseIcon"
            onMouseDown={() => this.toggleSidebar()}
            style={{ zIndex: 106 }}
            hidden="true"
          >
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
              alt="More"
            />
          </span>
        </span>
        <div
          style={{
            position: "absolute",
            top: "-15px",
            userSelect: "none",
          }}
          id="sideBarHeader"
          className="sideBarHeader"
          hidden="true"
          onMouseOver={() => this.openSidebar()}
          onMouseDown={() => this.toggleSidebar()}
        >
          {
            // Sidebar Header Section
          }
          <br />
          <FaSuperpowers
            size="35px"
            className="App-logo"
            alt="logo"
            style={{
              height: "75px",
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
          //Sidebar Button Overlay
        }
        <div
          onClick={this.toggleSidebar}
          className="SliderButtonLay"
          style={{
            height: "75px",
            width: "50px",
            zIndex: 223,
            position: "absolute",
            color: "transparent",
            backgroundColor: "transparent",
          }}
        ></div>

        {
          //Sidebar Background Section
        }
        <div
          style={{
            top: "0px",
            zIndex: "98",
            position: "fixed",
            userSelect: "none",
          }}
          onMouseOver={() => this.openSidebar()}
          onMouseLeave={() => this.toggleSidebar()}
          id="appSidebar"
          className="appSidebar inactiveSidebar"
        >
          <div
            className="appSidebarItems"
            style={{
              top: "25px",
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
               
              <a href="/home">
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
              <a href="/about">
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
                <a href="/shop">
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
                <a href="/login">
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
                <a href="/contact">
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
            <div
              id="sidebarBlurb"
              hidden={true}
              style={{
                position: "relative",
                top: "150px",
                paddingBottom: "10px",
                justifyContent: "center",
                color: "darkblue",
                paddingTop: "10px",
                paddingRight: "35px",
                paddingLeft: "35px",
              }}
            >
              "Not all that wander are lost."
            </div>
            <div
              id="sidebarBlurb2"
              hidden={true}
              style={{
                position: "relative",
                top: "250px",
                paddingBottom: "10px",
                justifyContent: "center",
                color: "darkblue",
                paddingTop: "10px",
                paddingRight: "35px",
                paddingLeft: "25px",
              }}
            >
              Website, &amp; Design by: <br />
              <a href="http://MicroHawaii.com">http://MicroHawaii.com</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
