import ProfilerComponent from "./Profiler"
import ThePureComponent from "./ThePureComponent"
import React from "react";
import TodoList from "./ToDoLIst";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { ThemeProvider } from "./ThemeToggle/ThemeContext";
import Page from "./AuthenticationContext/Page";
import CartPage from "./Cart/CartPage";
import PageNotification from "./ContextNotification/PageNotification";
import NotificationPage from "./ContextNotification/NotificationPage";
import AutoFocusInput from "./useRef/AutoFocusInput";
import PersistentCounter from "./useRef/PersistentCounter";
import ChangeColor from "./useRef/ChangeColor";
import MeasureElement from "./useRef/MeasureElement";
import CounterPage from "./Counter/CounterPage";
import FetchPost from "./Axios/FetchPost";
import ErrorHandlingExample from "./Axios/ErrorHandlingExample";
import CreatePost from "./Axios/CreatePost";
import FetchUsers from "./Axios/FetchUsers";
import FetchWithTimeout from "./Axios/FetchWithTimeout";
import Counter from "./UserReducer/Counter";
import Form from "./UserReducer/Form";
import FetchData from "./UserReducer/FetchData";

// function App() {

//   return (
//     <>
//     {/* <ProfilerComponent/> */}
//     {/* <ThePureComponent/> */}
//     </>
//   )
// }

// export default App


// const MouseTracker = (props) => {
//   const [position, setPosition] = React.useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setPosition({ x: event.clientX, y: event.clientY });
//   };

//   return (
//     <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
//       {props.render(position)}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <MouseTracker
//       render={(position) => (
//         <h1>Mouse position: {position.x}, {position.y}</h1>
//       )}
//     />
//   );
// };

// export default App;

// import React from 'react'

const App = () => {
  return (
    <>
    {/* <TodoList/> */}
    {/* <ThemeProvider>
    
    <ThemeToggle/>  
    </ThemeProvider> */}
    {/* <Page/> */}
    {/* <CartPage/> */}
    {/* <NotificationPage/> */}
    {/* <AutoFocusInput/> */}
    {/* <PersistentCounter/> */}
    {/* <ChangeColor/> */}
    {/* <MeasureElement/> */}
    {/* <CounterPage/> */}
    {/* <FetchPost/> */}
    {/* <ErrorHandlingExample/> */}
    {/* <CreatePost/> */}
    {/* <FetchUsers/> */}
    {/* <FetchWithTimeout/> */}
    {/* <Counter/> */}
    {/* <Form/> */}
    <FetchData/>
    </>
  )
}

export default App
