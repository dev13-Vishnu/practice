import React, { useReducer } from 'react'

const infoReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return {...state, name:action.payload};
        case "UPDATE_ADDRESS":
            return {...state, address: action.payload};
        default:
            return state;
    }
}

const UserInfo = () => {

    const initialState = {name:"",address:""};

    const [state, dispatch] = useReducer(infoReducer, initialState);




  return (
    <div>
        <h2>User Info</h2>
        <div>
            <input type="text" 
            value={state.name}
            onChange={(e)=> dispatch({type:"UPDATE_NAME", payload:e.target.value})}/>

        </div>
        <div>
            <input type="text" 
            value={state.address}
            onChange={(e) => dispatch({type:"UPDATE_ADDRESS", payload:e.target.value})}/>

        </div>
        <div>
            <p>Name:{state.name}</p>
            <p>Address:{state.address}</p>
        </div>
      
    </div>
  )
}

export default UserInfo
