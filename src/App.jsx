import React from 'react'
import Login from './Components/Login'
import "./global.css"
import Signup from './Components/Signup'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
