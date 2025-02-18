import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count+ 1};
        case "DECREMENT":
            return {count: state.count -1};
        default:
            return state;
    }
}

const Counter = () => {

    const [state,dispatch] = useReducer(reducer,{count:0});

  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Increase</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Decrese</button>
      
    </div>
  )
}

export default Counter
