import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Body from './Body'
import Home from './Home'
import Connect from './Connect'
import Profile from './Profile'
import Logout from './Logout'
import Protected from './Protected'
import Login from './Login'
import {Request} from './Request'


function App() {

  return (
    <>
   
   {console.log('App rendered')}
    <Routes>
    <Route path='/' element={<Body/>}>  
    <Route index element={<Protected><Home /></Protected>} />
    <Route path='profile' element={<Protected><Profile/></Protected>}/> 
    <Route path='connection' element= {<Protected><Connect/></Protected>}/>
    <Route path='request' element={<Protected><Request/></Protected>}/>
       </Route>
     <Route path='/login' element={<Login/>}/>
    <Route path='/logout' element={<Logout/>}/>

   </Routes>


      
    
    </>
  )
}

export default App
