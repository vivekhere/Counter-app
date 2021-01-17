// Passing data to components

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} selected={true} />
        ))}
      </div>
    );
    // value and selected will be the properties of that props object
    // key will not be part of that because this is a special attribute for uniquely
    // identifying elements

    // by default the selected attribute will be set to true so it is redundant here
  }
}

export default Counters;
