import React from 'react'

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Consultation from './pages/Consultation/Consultation';
import PageNotFound from './pages/PageNotFound/PageNotFound';

// React Router Dom
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <div className='app__main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/consultation/:service' element={<Consultation/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
