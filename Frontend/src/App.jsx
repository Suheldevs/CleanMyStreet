import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Header'
import { ThemeContext} from './Context/ThemeProvider.jsx';

function App() {
  const context = useContext(ThemeContext);
  console.log(context)
  return (
  <div className={`${context.theme === 'light' ? 'bg-slate-800 ': 'bg-white'}`}>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
