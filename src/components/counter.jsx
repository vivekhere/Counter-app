// conditional rendering

// conditional statements like if else cannot be used in jsx expression

// To use condition -
// 1. we can use the and && operator in jsx expression
// OR
// 2. we can create a function and make use of conditional statements in that function
// and dynamically call that function in jsx expression using {}.

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return "2. There are no tags";

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "1. There are no tags"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
