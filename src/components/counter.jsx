// rendering lists

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  // to render the list of items
  // we can use map method to map each element in the tags array into react element

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
    // we are getting a string 'tag' and mapping it to the jsx expression '<li>tag</li>'
    // which will get compiled to the react element which is plain js object

    // we need to provide a unique key to each element in the list
    // this is because if the state of this react element changes react needs to quickly
    // figure out what element is changed and where in the DOM it should make changes
    // to make the DOM in sync with the virtual DOM.
    // the key should be unique in this particular list.
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
