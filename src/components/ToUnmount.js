import React from "react";
class ToUnmount extends React.Component {
  componentDidMount() {
    const startTime = new Date();
    console.log("Storing Check-in(Mounting) time... ⌚ ");
    console.log("Component Mounted ✔️");
    localStorage.setItem("Check_In_Time", startTime);
  }

  componentWillUnmount() {
    const endTime = new Date();
    console.log("Clearing localstorage... 🧹");
    localStorage.removeItem("Check_In_Time");
    console.log("Storing Check-Out(Unmounting) time... ⌚ ");
    localStorage.setItem("Check_Out_Time", endTime);
    console.log("Component Unmounted 🗑️");
  }

  render() {
    var lastCheckOutTime = new Date(
      Date.parse(localStorage.getItem("Check_Out_Time"))
    );
    lastCheckOutTime = lastCheckOutTime.toUTCString();
    return (
      <div className="unmount-phase-child border border-dark">
        <h1>Sample Component</h1>
        <h4>
          You previously visited on : <br />
          {lastCheckOutTime}
        </h4>
      </div>
    );
  }
}
export default ToUnmount;
