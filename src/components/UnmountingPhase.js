import React from "react";
import ToUnmount from "./ToUnmount.js";
class ComponentWillUnmount extends React.Component {
  state = { display: true };

  removeComponent = () => {
    this.setState({
      display: false,
    });
  };

  render() {
    return (
      <div className="unmount-phase">
        <h1>Unmounting Phase</h1>

        {/* Component to Remove/Unmount */}
        {this.state.display && <ToUnmount />}

        <button
          className="btn btn-outline-danger"
          onClick={this.removeComponent}
        >
          {this.state.display ? "Remove Component" : "Component is removed !!!"}
        </button>
      </div>
    );
  }
}

export default ComponentWillUnmount;
