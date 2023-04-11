import React, { useEffect, useState } from 'react';
import "../src/style.css";
import { Outlet } from 'react-router-dom';
import Home from './components/Home';

const App = () => {

  return (
    <div>
      
      <Outlet>
        <Home />
      </Outlet>
      
      
    </div>
  );
};

export default App;