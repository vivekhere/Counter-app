// rendering classes dynamically

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";
    // these two lines are purely about determining the class for className
    // they are polluting the render method
    // we can encapsulate these lines in seperate method getBadgeClasses

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
