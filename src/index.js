import React from 'react';
import './App.css'
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About'
import Navigation from './components/Navigation'
import Counter from './components/Counter'
import FetchData from './components/FetchData'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <>
    <Navigation />
    <Router>
      <Routes>
        <Route exac path ='/' element={<App />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/about' element={<About />} />
        <Route path='/fetchData' element={<FetchData />} />
      </Routes>
    </Router>
  </>,
  document.getElementById('root')
);
