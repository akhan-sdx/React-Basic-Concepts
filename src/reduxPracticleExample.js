import { useDispatch , useSelector,connect } from "react-redux";
import "./CssFolder/Hooks.css";
import React from "react";

const ReduxElement = (props) => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const payload = useSelector((state) => state.payload);


  const onClick = () => {
    dispatch({
      type: "INCREMENT",
      counter: 5,
      payload : [
        {
        key : 1,
        name  : "aamir"
      }]
    },
    {
      type : "DECREMENT",
     
    })
  }
  console.log("oopoop",payload);

  return (
    <div>
      <h1>{counter}</h1>
     {payload.map(
        (val)=>{
         return val.map( (h, key)=>(<h1 key={key}>{h.name}</h1>));
        }

     )}

       <button className="use-effect-btn" onClick={onClick}>
        Click me
      </button>
    </div>
  );
};


export default ReduxElement;
