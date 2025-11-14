import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    // where children is a prompt passedwhen we attach anything below when we use Protected cmponnent while mounting
    
    
  return (
    localStorage.getItem('token') ? children : <Navigate to='/login' replace/> 
     
  )
}

export default Protected