import React, {useRef} from 'react'

const ChangeColor = () => {
    const textRef = useRef(null);
  const toggleColor = () => {
    textRef.current.style.color = textRef.current.style.color === "red"? "black":"red"; // Update DOM directly
  };

  return (
    <div>
      <h2 ref={textRef}>This is a sample text</h2>
      <button onClick={toggleColor}>Toggle Text Color</button>
    </div>
  );
}

export default ChangeColor
