import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
     const navigate=useNavigate();
     useEffect( ()=> {

        const logout_user =async ()=>{
       const session_clear=  await fetch('http://localhost:3500/logout') ;
       navigate('/login', {replace :'true'})  // will replace/append  logout route from browser stack to login so looks ['home',login']
       
     }

     logout_user();

    }
        

    ,[navigate])
   
  return (
    
    <div> Logging Out User</div>
  )
}

export default Logout