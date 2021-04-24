import React, { Component } from "react";
import "./App.css";
// import MountingPhase from "./components/MountingPhase";
import UpdatingPhase from "./components/UpdatingPhase";
// import UnmountingPhase from "./components/UnmountingPhase";

class App extends Component {
  state = {
    device: "⌨️",
  };

  changeDevice = () => {
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
        {/* <MountingPhase /> */}

        {/* ---------------Updating Phase--------------- */}
        <div className="update-phase">
          <h1>Parent Component</h1>
          <div style={{ fontSize: "5em" }}>{this.state.device}</div>
          <button className="btn btn-outline-dark" onClick={this.changeDevice}>
            Change Props
          </button>
          <UpdatingPhase device={this.state.device} />
        </div>
        {/* ---------------Unmounting Phase--------------- */}
        {/* <UnmountingPhase /> */}
      </div>
    );
  }
}
export default App;
