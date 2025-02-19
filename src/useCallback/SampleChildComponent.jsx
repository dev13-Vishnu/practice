import React from 'react'

const SampleChildComponent = ({onClick}) => {
    console.log("Child re-rendered")
  return <button onClick={onClick}>Click Me</button>
}

export default SampleChildComponent
