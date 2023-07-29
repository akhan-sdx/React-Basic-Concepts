import { useState, useEffect } from 'react';

// Custom hook for tracking mouse position
const useMousePosition = ()=> {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return mousePosition;
}

// Usage example

export default useMousePosition;