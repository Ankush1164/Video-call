import { useState } from 'react'
import {Routes , Route} from "react-router-dom"
import './App.css'
import HomePage from './Components/HomePage'
import Rome from './Components/Rome'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/room/:roomId' element={<Rome/>}/>
    </Routes>
    </>
  )
}

export default App
