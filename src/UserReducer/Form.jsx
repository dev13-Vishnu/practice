import React, { useReducer } from 'react'

const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {...state, email: action.payload}
        case "SET_PASSWORD":
            return {...state, password: action.payload}
        case "SET_ERROR":
            return {...state, error : action.payload}
        default:
            return state
            
    }
}

const Form = () => {

    const initialState = { email: "", password:"", error:""};

    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state.email.includes("@")) {
            dispatch({type:"SET_ERROR", payload:"Invalid email"})
        } else if (state.password.length < 6) {
            dispatch({type: "SET_ERROR", payload:"Password is too short"});
        } else {
            dispatch({type:"SET_ERROR", payload: ""})
            alert("Form submitted");
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}> 
        <input value={state.email}  onChange={(e)=> dispatch({type:"SET_EMAIL", payload:e.target.value})}/>
        <input value={state.password} type="password" onChange={(e)=> dispatch({type:"SET_PASSWORD",payload: e.target.value})}/>
        <button type='submit'>Submit</button>
            {state.error && <p>{state.error}</p>}
        </form>
      
    </div>
  )
}

export default Form
