import React, { Component } from "react";
import "./App.css";
// import MountingPhase from "./components/MountingPhase";
// import UpdatingPhase from "./components/UpdatingPhase";
import UnmountingPhase from "./components/UnmountingPhase";

// import Hero from "./components/Hero";
// import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  state = {
    device: "⌨️",
  };

  changedevice = () => {
    this.setState({
      device:
        this.state.device === "🖨️"
          ? this.state.device === "🖨️"
            ? "⌨️"
            : "🖨️"
          : this.state.device === "🖱️"
          ? "🖨️"
          : "🖱️",
    });
  };

  render() {
    return (
      <div className="App">
        {/* ---------------Mounting Phase--------------- */}
        {/* <MountingPhase/> */}

        {/* ---------------Updating Phase--------------- */}
        {/* <div className="update-phase">
          <h1>Parent Component</h1>
          <div style={{ fontSize: "5em" }}>{this.state.device}</div>
          <button className="btn btn-outline-dark" onClick={this.changedevice}>
            Change Props
          </button>
          <UpdatingPhase device={this.state.device} />
        </div> */}
        {/* ---------------Unmounting Phase--------------- */}
        <UnmountingPhase />

        {/* ---------------Errorhandling Phase--------------- */}
        {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      </div>
    );
  }
}
export default App;
