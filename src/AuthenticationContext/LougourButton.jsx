
import React from 'react'
import { UseUser } from './UserContext'


const LougourButton = () => {

    const {logout} = UseUser();
  return <button onClick={logout}>Logout</button>
}

export default LougourButton
