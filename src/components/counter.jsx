// Updating the state

// now that we have access to the current object in our event handler it is time to
// update the value of the count property.

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // this.state.count++;
    // this will increment the value of count but react is not aware of that and
    // that is why it is not updating the view

    // we need to explicitly tell react what is changed
    // Solution
    this.setState({ count: this.state.count + 1 });
    // this method tells react that we are updating the state
    // it will then figure out what part of the state is changed
    // based on that it will bring the DOM in sync with virtual DOM
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
