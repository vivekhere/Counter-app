// Binding event handlers

// Previously this was referencing the window object
// Due to strict mode being enabled, it showed 'this' as undefined

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  // // Solution 1: using constructor
  // // In the constructor we have access to this keyword
  // // so we can make use of the bind method on our handleIncrement function / object
  // // the bind method will return new instance of the function with 'this' referencing
  // // to current object
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }

  // Solution 2: Convert the function into arrow function
  // Arrow functions do not rebind the this keyword; they inherit it
  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
