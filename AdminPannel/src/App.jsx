import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import ViewComplaint from './Pages/ViewComplaint'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/view/:id' element={<ViewComplaint/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App