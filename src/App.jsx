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
    <NotificationPage/>
    </>
  )
}

export default App
