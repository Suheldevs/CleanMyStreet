import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { ThemeContext} from './Context/ThemeProvider.jsx';
import Header from './Component/Header.jsx';
import Disclaimer from './Component/Disclaimer.jsx';

function App() {
  const context = useContext(ThemeContext);
  console.log(context)
  return (
  <div className={`${context.theme === 'light' ? 'bg-slate-900 ': 'bg-white'}`}>

    <BrowserRouter>
    <Disclaimer/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
