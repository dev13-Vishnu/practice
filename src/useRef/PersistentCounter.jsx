import React, { useRef, useState } from 'react'

const PersistentCounter = () => {
    const countRef = useRef(0);
    const [count, setCount] = useState(0);

    const increment = () => {
        countRef.current += 1;
        setCount(count + 1);
        console.log("Persistnet Count:",countRef.current);
    };
  return (
    <div>
      <h2>State Count:{count}</h2>
        <h2>Ref Count(does not trigger re-render):{countRef.current}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default PersistentCounter
