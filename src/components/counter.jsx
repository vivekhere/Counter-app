import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  // instead of hard coding count to 0 we will get the value from the props

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    // every react element has a property called props
    // this is basically a plain js object that includes all the attributes that we
    // set in counters component

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
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
