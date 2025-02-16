import React from 'react'
import { NotificationProvider } from './NotificationContext'
import PageNotification from './PageNotification'

const NotificationPage = () => {
  return (
    <>
    <NotificationProvider>
        <PageNotification/>
    </NotificationProvider>
    
    </>
  )
}

export default NotificationPage
