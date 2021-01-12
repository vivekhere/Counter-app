import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // <div>
      //   <h1>Hello World</h1>
      //   <button>Increment</button>
      // </div>
      // this will wrap this div tag in the root id container
      // wraping the h1 tag and a button in div is unnecessary

      // Alternative
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
      // this will wrap the elements directly in the root id container
    );
  }
}

export default Counter;
