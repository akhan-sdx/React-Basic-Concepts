import { Component } from "react";
import { connect } from "react-redux";

class ReduxClassComponent extends Component {
 
  onClick = () => {
    // Call the `increment` action from props
    return this.props.increment();
  };

  render() {
    // const { counter, payload } = this.props; // Destructure counter and payload from props

    return (
      <div>
        <div>
          <h1>{this.props.counter}</h1>
            {this.props.payload.map((val) => {
              return val.map((h, key) => <h1 key={key}>{h.name}</h1>);
            })}
          <button className="use-effect-btn" onClick={this.onClick.bind(this)}>
            Click me
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch(
        {
          type: "INCREMENT",
          counter: 5,

          payload: [
            {
              key: 1,
              name: "aamir",
            },
          ],
        },
        {
          type: "DECREMENT",
        }
      ),

    decrement: () => dispatch({ type: "DECREMENT", counter: 2 }),
  };
};

const mapStateToProps = (state) => {
  console.log("counter=>> ", state.counter);
  return {
    counter: state.counter,
    payload: state.payload
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxClassComponent);
