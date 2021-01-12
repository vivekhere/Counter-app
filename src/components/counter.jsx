// display values dynamically instead of hard coding

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  // state is a special property in react components
  // it is an object which includes any data that this component needs

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
      // this references the current object
      // in between the curly braces we can write any valid javascript expression
      // an expression is something that produces a value
      // we can also call function that returns a value
    );
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;
    // we can improve the above code using object destructuring by removing repetition

    const { count } = this.state;
    // return count === 0 ? "Zero" : count;

    // we can also return a jsx expression as it gets compiled to react element
    return count === 0 ? <h3>Zero</h3> : count;

    // jsx expressions are like a normal javascript objects
    // we can return them or pass them to a function
    // we can also use them as a const to a variable ex: const x = <h1>Hello</h1>
  }
}

export default Counter;
