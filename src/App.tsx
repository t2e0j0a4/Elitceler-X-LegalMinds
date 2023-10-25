import React, {useEffect} from 'react'

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
// import Consultation from './pages/Consultation/Consultation';
import PageNotFound from './pages/PageNotFound/PageNotFound';

// React Router Dom
import { Routes, Route, useLocation } from "react-router-dom";
import Consultation from './pages/Consultation/Consultation';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top : 0, behavior : 'smooth'});
  }, [location]);

  return (
    <div className='app'>
      <Navbar/>
      <div className='app__main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/consultation' element={<Consultation/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
