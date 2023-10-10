import React from 'react'
import LandigPage from './LandigPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoPage from './NoPage';

const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route exact="/" path='/' element={<LandigPage />} />
          <Route exact="/home" path='/home/page' element={<Home />} />
          <Route exact="/about" path='/about' element={<About />} />
          <Route exact="/contact" path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

