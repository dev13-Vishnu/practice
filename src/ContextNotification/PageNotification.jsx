import React from 'react'
import { NotificationProvider, useNotification } from './NotificationContext'
import Notifications from './Notifications'

const PageNotification = () => {
    const {addNotification} = useNotification();

  return (
    <>
        <button onClick={() => addNotification("a new message received!")}>Add Notification</button>
        <Notifications/>
    </>
  )
}

export default PageNotification
