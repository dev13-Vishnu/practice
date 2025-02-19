import React, { useCallback, useEffect, useState } from 'react'
import SampleChildComponent from './SampleChildComponent';

const SampleParentComponet = () => {
    const [count,setCount] = useState(0);

    const handleClick =() => {
        console.log("Button clicked")
    };

    useEffect(() => {
        console.log("The function reference changed")
    }, [handleClick])

  return (
    <div>
      <p>
        {count}
      </p>
      <button onClick={()=> setCount(count + 1)}>Increae Count</button>
      <SampleChildComponent onClick={handleClick}/>
    </div>
  )
}

export default SampleParentComponet
