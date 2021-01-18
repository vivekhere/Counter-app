// Props vs State

// Props -> props includes data that we give to a component
// props is read only i.e we cannot change the input to the compnents
// react does not allow you to change any properties of the props object
// It is purely an input the component and we should not modify the input
// If we need to modify the input then we should put it in the state (shown below)

// State -> state includes data that is local or private to that component
// Other components cannot access that state it is completely internal to that state

import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.props.value += 1;
    // this will not work / give an error as props is read only

    // Solution
    // use state to set the value input from props
    // and then use state to modify the value property
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value: count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
