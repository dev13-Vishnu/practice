import React, { useEffect, useReducer } from 'react'

const dataReducer = (state, action) => {
    switch(action.type) {
        case "FETCH_START":
            return {...state, loading: true, error: null};
        case "FETCH_SUCCESS":
            return {...state, loading : false, data: action.payload}
        case "FETCH_ERROR":
            return {...state, loading: false, error: action.payload}
    }
}

const FetchData = () => {

    const initialstate  = {data:[],loading: false, error: null};
    const [state, dispatch] = useReducer(dataReducer, initialstate)

    useEffect(() => {
        dispatch({type:"FETCH_START"})
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();

        })
        .then((data) => {
            dispatch({type:"FETCH_SUCCESS", payload: data})
        }).catch((error) => {
            dispatch({type: "FETCH)_ERROR", payload: error.message})
        });
    },[])
  return (
    <div>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>{state.error}</p>}
        <ul>
            {state.data.map((item) =>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default FetchData
