// import { useReducer, useState } from "react";

// const todoReducer =(state, action) => {
//     switch (action.type) {
//         case "ADD_TODO":
//             return[...state,{id:Date.now(), text:action.payload, completed: false}]
//         case "TOGGLE_TODO":
//             return state.map((todo)=> todo.id === action.payload? {...todo, completed:!todo.completed}:todo);
//         case "REMOVE_TODO":
//             return state.filter((todo)=> todo.id !== action.payload);
//         case "CLEAR_COMPLETED":
//             return state.filter((todo)=> !todo.completed);
    
//         default:
//             return state;
            
//     }
// }

// const initialTodos = [];


// function TodoList () {

//     const [state, dispatch] = useReducer(todoReducer, initialTodos);
//     const [text, setText] = useState("");

//     const addToDo = () => {
//         if (text.trim() !== "") {
//             dispatch({type:"ADD_TODO",payload:text});
//             setText("");
//         }
//     }

//     return(
//         <div>
//              <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//             <button onClick={addToDo}>Add Task</button>
//             <button onClick={()=>dispatch({type:"CLEAR_COMPLeTED"})}>Clear Complated</button>
//             <ul>
//                 {state.map((todo) => (
//                     <li key={todo.id} style={{textDecoration:todo.completed ? "line-through": "none"}}>{todo.text}
//                     <button onClick={()=>dispatch({type:"TOGGLE_TODO",payload: todo.id})}>✔</button>
//                     <button onClick={()=>dispatch({type: "REMOVE_TODO", payload: todo.id})}>❌</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )

// }
// export default TodoList;

import React, { useReducer, useState } from 'react'

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state,{id: Date.now(), text: action.payload, completed: false}]
        case "TOGGLE_TODO":
            return state.map((todo)=> todo.id === action.payload ? {...todo,completed:!todo.completed}:todo)
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload)
        default:
            return state;
    }
}

const initialTodos = [];

const ToDoLIst = () => {
    const [state,dispatch] = useReducer(todoReducer, initialTodos)
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim() !== "") {
            dispatch({type:"ADD_TODO",payload:text});
            setText("");
        } 
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addTodo}>Add Task</button>
        <ul>
            {state.map((todo) =>( <li key={todo.id} style={{textDecoration: todo.completed?"line-through":""}}>{todo.text}
                <button onClick={() => dispatch({type:"TOGGLE_TODO", payload: todo.id})}>Compleated</button>
                <button onClick={() => dispatch({type:"REMOVE_TODO",payload: todo.id})}>Remove</button>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default ToDoLIst
