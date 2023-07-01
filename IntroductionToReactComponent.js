import React from "react";


function MyComponent(props) {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my personal Component.</p>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
}


export default MyComponent;



//In this example, the MyComponent component is imported and rendered inside the App component.
// When you run your React application, you should see the contents of MyComponent rendered on the screen.




// Props  :=  are inputs that are passed to a component from its parent component.
// They are read-only and cannot be modified within the component itself.
// Props are used to customize the behavior and appearance of a component