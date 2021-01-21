// Raising and handling events

// The component that owns a piece of the state, should be the one modifying it.

// Inorder to delete an item we need to remove it from the counters array in
// counters component state object / property
// We do not have access to the counters array in counter components state
// Since the counters array is part of the counters component so modifying the
// state should be done by counters component itself

// But we know that state is something private and internal to a component
// So inorder to modify the state of counters component from counter component
// we have to raise an event in the counter component

// counter component will raise an event and counters component will handle that event
// we should implement onDelete in the counter to raise an event
// we should implement handleDelete() in the counters component to handle that event

import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
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
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
    // reference prop here 'this.props.onDelete'
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
