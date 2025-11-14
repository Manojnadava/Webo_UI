import React from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
  return (
   localStorage.getItem('token') ? <Navigate to='/'/> : '<div> Please Sign In</div>'
  )
}

export default Login