import { useContext } from 'react'
import './ThemeToggle.css'
import { ThemeContext } from './ThemeContext'


const ThemeToggle = () => {

  const {darkTheme,toggleTheme} = useContext(ThemeContext);
  return (
    <div className={darkTheme?"Dark":"Light"}>
      <h1>Theme toggle</h1> 
    <button onClick={toggleTheme}>Switch to {darkTheme?"Light":"Dark"}</button>
      
    </div>
  )
}

export default ThemeToggle
