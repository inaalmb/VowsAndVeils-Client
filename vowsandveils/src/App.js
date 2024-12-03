import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/registration' element = {<Registration/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path = '/navbar' element = {<Navbar/>}/>
      </Routes>

    </div>
  );
}

export default App;
