import React, { useContext } from 'react'
import { useCounter } from './CounterContext'

const Counter = () => {
    const {count,setCount} = useCounter()
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  )
}

export default Counter
