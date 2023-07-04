import React, { useState } from 'react';

export function EventHandlingExample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const handleChange = (event) => {
    setCount(parseInt(event.target.value));
  };



  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      {/* The onClick event is used to handle a click event on an element, such as a button or a link. */}
      <button onClick={reset}>Reset</button>
      <input type="number" value={count} onChange={handleChange} />

      {/* The onChange event is used to handle changes in an input field, such as when the user types or selects a value.*/}

    </div> 

  );
}



export function FormExample() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents the default form submission behavior
  
      // Perform form validation or other necessary logic
      if (name && email) {
        // Form is valid, do something with the form data
        console.log('Submitting form:', { name, email });
  
        // Clear the form
        setName('');
        setEmail('');
      }

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    );
  }
  
