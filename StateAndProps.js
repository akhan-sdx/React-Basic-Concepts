import React from "react";

class SetStateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: "aamir",
    };
  }

  changeName = () => {
    this.setState({ myName: this.props.name });
    // setState only used in class component not functional component.
  };

  render() {
    return (
      <div>
        <h1>{this.state.myName}</h1>
        <button onClick={this.changeName}>Click me to change Name :</button>
      </div>
    );
  }
}

export default SetStateExample;
