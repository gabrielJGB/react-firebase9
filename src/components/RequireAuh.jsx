import React, { useContext } from 'react'
import { UserContext } from '../context/userProvider'
import { Navigate } from "react-router-dom";

const RequireAuh = ({ children }) => {
    const {user} = useContext(UserContext)
    console.log(user)
    if(!user){
        return <Navigate to="/login"/>
    }
    return children
}

export default RequireAuh