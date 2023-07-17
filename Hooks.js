import { useEffect, useState, useContext } from "react";
import React from "react";
import "./CssFolder/Hooks.css"

const UseEffectExplanation = () => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("use effect.....");
    // setCount(count+ 1);
  }, [count, message]);


  const handleClick = () => {
    setCount(count + 2);
    setMessage("Count increased by :");
  };

  return (
    <div>
      <h1>Here is example for useEffect : {message }  {count} </h1>
      <button className="use-effect-btn" onClick={handleClick}>Click me</button>
    </div>
  );
};

// This hook allows you to consume values from a React context within a component. It takes a context object as its argument and returns the current context value. For example:

const ThemeContext = React.createContext("red");

const ThemeButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ backgroundColor: theme }}>Toggle Theme</button>
  );
};


export { ThemeButton, UseEffectExplanation};
export default UseEffectExplanation;
