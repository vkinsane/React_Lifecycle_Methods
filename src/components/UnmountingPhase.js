import React from "react";
import ToUnmount from "./ToUnmount.js";
class ComponentWillUnmount extends React.Component {
  state = { display: true, isOnline: true };

  removeComponent = () => {
    this.setState({
      display: false,
      isOnline: false,
    });
  };

  render() {
    return (
      <div className="unmount-phase">
        <h1>Unmounting Phase</h1>

        {/* Component to Remove/Unmount */}
        {this.state.display ? (
          <ToUnmount />
        ) : (
          <h4>
            Last online on : <br />
            {localStorage.getItem("Logout_Time")}
          </h4>
        )}

        <button
          className="btn btn-outline-danger"
          onClick={this.removeComponent}
        >
          {this.state.isOnline
            ? "Go offline (Remove Component) "
            : "Component is removed !!!"}
        </button>
      </div>
    );
  }
}

export default ComponentWillUnmount;
