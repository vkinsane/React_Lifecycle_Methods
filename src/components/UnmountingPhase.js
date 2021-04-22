import React from "react";
import ToUnmount from "./ToUnmount.js";
class ComponentWillUnmount extends React.Component {
  state = { display: true };

  removeComponent = () => {
    this.setState({ display: false });
  };

  render() {
    return (
      <div className="unmount-phase">
        <h1>Unmounting Phase</h1>

        {this.state.display && <ToUnmount />}

        <button className="btn btn-dark" onClick={this.removeComponent}>
          Remove component
        </button>
      </div>
    );
  }
}

export default ComponentWillUnmount;
