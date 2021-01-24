import React, { Component } from "react";

class Counter extends Component {
  // This method is called after a component is updated which means we have
  // new state or new props.
  // So we can compare this new state or new props with the old one's and if there
  // is a change in the state or props we can make a AJAX request to get the new
  // data from the server or do something.
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    // Here we are checking if the new props is different from the previous props
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get new data from the server
    }
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
