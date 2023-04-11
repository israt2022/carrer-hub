import React, { useEffect, useState } from 'react';
import "../src/style.css";
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {

  return (
    <div>
      <Header></Header>
      <Outlet>
        <Home />
      </Outlet>
      
      
    </div>
  );
};

export default App;