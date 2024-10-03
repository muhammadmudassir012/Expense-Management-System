import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Home from '../Home/Home'

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
