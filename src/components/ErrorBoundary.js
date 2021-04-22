import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  //making this component as error boundary
  //This lifecycle is invoked after an error has been
  // /thrown by a descendant component.
  // It receives the error that was thrown as a parameter
  //and should return a value to update state.

  //works better in production(made for production).
  //it shows the error overlay in development closing it will show
  //the requires output
  //can be used in e-commerce website which has 1000 products
  //where one product code has error so that product will be
  //replaced by a fall back ui.
  //so that one product will not affect other 999 products.
  static getDerivedStateFromError(error) {
    console.log("We got this error :", error);
    return {
      hasError: true,
    };
  }

  //2 params error and info
  //error : the error that was thrown
  //info : An object with a componentStack key containing
  // information about which component threw the error.
  //It is used for things like logging errors.(side Effects)
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  //Summary : Error boundaries are react components that catch Javascript error in their child
  //component tree, log those errors, and display a fall-back UI.
  //A class component becomes an Error Boundary by defining either or both
  //of getDerivedStateFromError and componentDidCatch lifecycle methods.
  //The place ment of the Error Boundary also matters as it controls
  //if he entire app //should have the fall-back UI or just the
  //component causing problem.
  //Provide a way to gracefully handle error in application code.
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
