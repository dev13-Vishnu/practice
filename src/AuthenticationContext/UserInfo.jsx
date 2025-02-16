import React from 'react'
import { UseUser } from './UserContext'

const UserInfo = () => {
    const {user} = UseUser();

  return <p> {user? `Logged in as ${user.name}`:"Not Logged In"}</p>
}

export default UserInfo
