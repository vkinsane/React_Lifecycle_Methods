import React from "react";
class ToUnmount extends React.Component {
  componentDidMount() {
    // const startTime = new Date();

    //Storing login time
    // console.log("Storing Login_Time (Mounting) time... ⌚ ");
    // localStorage.setItem("Login_Time", startTime);

    console.log("Component Mounted ✔️");
  }

  // Unmounting phase componentWillUnmount method ----- [only method]
  componentWillUnmount() {
    const endTime = new Date();
    //  Clearing local storage
    console.log("Clearing localstorage... 🧹");
    localStorage.removeItem("Login_Time");

    //Storing logout time
    console.log("Storing Logout_Time(Unmounting) time... ⌚ ");
    localStorage.setItem("Logout_Time", endTime);

    console.log("Component Unmounted 🗑️");
  }

  render() {
    var lastCheckOutTime = new Date(
      Date.parse(localStorage.getItem("Logout_Time"))
    );
    lastCheckOutTime = lastCheckOutTime.toString();
    return (
      <div className="unmount-phase-child border border-dark">
        <h1>Component</h1>
        <h4>
          {/* Last online on : <br />
          {lastCheckOutTime} */}
          Online
        </h4>
      </div>
    );
  }
}
export default ToUnmount;
