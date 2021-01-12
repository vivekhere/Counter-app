// set attributes on elements

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgageUrl: "https://picsum.photos/200",
    // this will generate a random 200 x 200 image
  };

  render() {
    return (
      <div>
        <img src={this.state.imgageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>

      // we cannnot set attributes in double quotes as it will be rendered as plain text
      // instead we can define a property in the state object and use it
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h3>Zero</h3> : count;
  }
}

export default Counter;
