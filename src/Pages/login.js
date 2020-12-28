import { CSSTransitionGroup } from "react-transition-group";
function Home() {
  return (
    <CSSTransitionGroup
      component="span"
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
          position: "relative",
          maxWidth: window.innerWidth,
          minWidth: window.innerWidth,
        }}
      >
        OmniWeb Landing Page: <br />
        <small> {String(window.location.href)}</small>
        <br />
        <br />
      </span>
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
            <small>12/28</small> <br />
            Login Features Coming Soon
          </span>
        </div>
        &nbsp;
        <br />
      </span>
    </CSSTransitionGroup>
  );
}

export default Home;