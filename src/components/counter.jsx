// set attributes on elements : class and styles

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // in jsx we have a style attribute which can be used to style objects
  // define a property called styles and reference it in jsx expression
  // the properties of this object are css properties in camel case notation
  styles = {
    fontSize: 15, // react will convert this to '10px'
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
      // since these jsx expressions get compiled to plain js objects
      // so we cannot use a class attribute because it is a reserved keyword in js
      // instead we use className attribute
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
