import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <div id='dashboard'>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>} />
    <Route path='dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
