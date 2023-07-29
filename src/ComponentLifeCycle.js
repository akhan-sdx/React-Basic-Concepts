import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor called');
  }

  UNSAFE_componentWillMount() {
    console.log("Inside component will unmount.....")
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount called');
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate called');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
    clearInterval(this.timerId);
  }

  render() {
    console.log('render called');
    return <p>Count: {this.state.count}</p>;
  }
}

export default LifecycleExample;


// //    Mounting Phase:
// constructor(): Initializes the component's state and logs a message in the console.
// static getDerivedStateFromProps(): Logs a message in the console but doesn't perform any state update.

// Updating Phase:
// componentDidMount(): Logs a message in the console and starts a timer to update the component's state every second.
// shouldComponentUpdate(): Logs a message in the console and returns true to allow the component to re-render.
// getSnapshotBeforeUpdate(): Logs a message in the console but doesn't perform any action.
// componentDidUpdate(): Logs a message in the console after the component is re-rendered.

// Unmounting Phase:
// componentWillUnmount(): Logs a message in the console and clears the timer before the component is unmounted.

// Rendering:
// render(): Renders the component's JSX and displays the count value. Logs a message in the console.
