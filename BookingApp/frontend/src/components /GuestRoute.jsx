import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { Navigate } from 'react-router-dom'

const GuestRoute = ({children}) => {
    const {user} = useContext(UserContext)

    /* if user is authenticated redirect to home */

    if (user) {
        return <Navigate to ="/" replace />
    }
    return children
  
}

export default GuestRoute
