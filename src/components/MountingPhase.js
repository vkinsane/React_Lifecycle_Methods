import React, { Component } from "react";

class MountingPhase extends Component {
  //Mounting phase constructor method ----- [1]
  constructor() {
    super();
    this.state = {
      name: "Vishal",
    };
    console.log("Constructor");
  }

  //Mounting phase getDerivedStateFromProps method ----- [2]
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //Mounting phase componentDidMount method ----- [4]
  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((my_data) => console.log(my_data));
  }

  //Mounting phase render method ----- [3]
  render() {
    console.log("Render");
    const message = "Mounting Phase";
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default MountingPhase;
