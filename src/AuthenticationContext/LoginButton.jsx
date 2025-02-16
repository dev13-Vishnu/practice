import React from 'react'
import { UseUser } from './UserContext'

const LoginButton = () => {
    const {login} = UseUser();

  return <button onClick={() =>login("JohnDoe")}>Login</button>
}

export default LoginButton
