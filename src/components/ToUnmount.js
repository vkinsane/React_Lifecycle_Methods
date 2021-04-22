import React from "react";
class ToUnmount extends React.Component {
  // Unmounting phase componentWillUnmount method ----- [only method]
  componentWillUnmount() {
    const Unmounting_Time = new Date();
    //storage
    localStorage.setItem("Unmounting_Time", Unmounting_Time);

    //console
    console.log("Storing Unmounting_Time(Unmounting time)... ⌚");
    console.log("Component Unmounted 🗑️");
  }

  render() {
    return (
      <div className="unmount-phase-child border border-dark">
        <h1>Component</h1>
        <h4>
          Last Unmount was on : <br />
          {localStorage.getItem("Unmounting_Time")}
        </h4>
      </div>
    );
  }
}
export default ToUnmount;
