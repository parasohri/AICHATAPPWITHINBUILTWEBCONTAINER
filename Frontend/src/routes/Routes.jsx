import React from 'react'
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Main from '../screens/Main'
import Project from '../screens/Project'
function APPRoutes() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    

    </BrowserRouter>
  )
}

export default APPRoutes
