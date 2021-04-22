import React, { Component } from "react";

class UpdatingPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: this.props.device,
    };
  }

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

  // Updating phase getDerivedStateFromProps method ----- [1]
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps ⭐");
  //   if (props.device !== state.device) {
  //     return {
  //       device: props.device,
  //     };
  //   }
  //   return null;
  // }

  //Updating phase shouldComponentUpdate method ----- [2]
  // shouldComponentUpdate(nextProps, nextState) {
  //   //Check Props change
  //   if (this.props !== nextProps) {
  //     console.log("Props:", this.props, "is changed to:", nextProps);
  //     console.log("Props is not the same as before.So, rendering again");
  //     return true;
  //   }
  //   //Check State change
  //   if (this.state !== nextState) {
  //     console.log(
  //       "State is Changed!, Component should display :",
  //       nextState.device
  //     );
  //     console.log(
  //       "But shouldComponentUpdate is returning false.So, not rendering again."
  //     );
  //     return false;
  //   }
  //   return false;
  // }

  //Updating phase getSnapshotBeforeUpdate method ----- [4]
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate ⭐");
  //   if (this.props !== prevProps) {
  //     console.log(
  //       "Update in Props:",
  //       prevProps.device,
  //       "is changed to:",
  //       this.props.device
  //     );
  //     return prevProps.device;
  //   }
  //   if (this.state !== prevState) {
  //     console.log(
  //       "Update in State:",
  //       prevState.device,
  //       "is changed to:",
  //       this.state.device
  //     );
  //     return prevState.device;
  //   }
  //   return null;
  // }

  //Updating phase componentDidUpdate method ----- [5]
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("componentDidUpdate ⭐");
  //   console.log(snapshot, "was changed");
  // }

  //Updating phase render method ----- [3]
  render() {
    console.log("Props :", this.props);
    console.log("State :", this.state);
    console.log("Component Rendered ⭐");
    return (
      <div className="update-phase-child">
        <h1>Updating Phase</h1>
        <div style={{ fontSize: "5em" }}>{this.state.device}</div>
        <button className="btn btn-outline-dark" onClick={this.changeDevice}>
          Change State
        </button>
      </div>
    );
  }
}

export default UpdatingPhase;
