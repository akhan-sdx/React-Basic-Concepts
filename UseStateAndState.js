import React, {Component, useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


export function ToggleButton() {
  const [isOn, setIsOn] = useState(false); //  the useState hook in React only takes a single initial state value as its argument. It does not support providing multiple initial values or assigning multiple state updater functions in a single useState call.

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>
  );
}


// To use state in a component, you need to declare it using the useState hook (in functional components) or as a property within the component's class (in class components). Here's an example using the useState hook:
  

export  class ExampleForStateComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        count: props.Count,
        message: props.Message,
      };
    }
  
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <p>Message: {this.state.message}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }

  //In this example, the count and message state variables are initialized within the this.state object in the component's constructor. The increment method uses this.setState to update the value of count. In the render method, 
  //this.state is used to access the current state values and render them in the UI.


