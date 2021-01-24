import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get new data from the server
    }
  }

  // After the entire component tree is re-rendered we will have a new virtual DOM
  // React will compare this new virtual DOM it will figure out if something is
  // removed then it will call componentWillUnmount() before removing anything in
  // the component and this gives the opportunity for any kind of cleanup that
  // can be done to avoid memory leaks.
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
