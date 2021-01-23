// Mounting Phase

// constructor -> render -> componentDidMount

import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
    // this.state = this.props.something;
    // we set the state direclty but for this we need to pass props as an argument
    // to the constructor and the super otherwise it will return undefined
    // we cannot use this.setState() because it will give an error
    // it can only be called when a component is rendered and place in DOM.
  }
  // This constructor is called only once when an instance of class is created.
  // This is the right place for initialising the properties in this class.
  // example : we can set the state based on the props that we receive from outside

  componentDidMount() {
    // AJAX call
    // this.setState({ something })
    console.log("App - Mounted");
  }
  // This method is called after the component is rendered into the DOM.
  // When the component is mounted that means that the component is in the DOM.
  // This is the perfect place to make AJAX calls and get data from the server.

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // The render method will return React element which represents our virual DOM.
  // Now React will get that DOM and render it in actual browser DOM.
  // Then the component is mounted.
  // When a component is rendered all it's children are also rendered recursively.
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
