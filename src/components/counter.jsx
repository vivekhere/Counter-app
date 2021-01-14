// Passing event arguments
// Solution 1

// Sometimes in a real world application we have to pass arguments to our events handlers
// but in onClick we need to pass a function reference so we cannot call handleIncrement()
// and pass an argument

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // pass an argument of any name of your choice or choose a name what the argument
  // is representing
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // we can define one function which will be used to pass an argument to our event
  // handler and then reference our new function in onClick
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
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
