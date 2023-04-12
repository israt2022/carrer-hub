import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Bars3BottomRightIcon, XMarkIcon, } from '@heroicons/react/24/solid'

const Header = () => {
  let [isMenuOpen, setMenuOpen] = useState(false)

  const menuDisplayHandler = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="px-4 py-4 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="relative flex items-center justify-between">
    <h1 className="header-site-name sm:text-left"><NavLink to="/">JobInventory</NavLink></h1>

    <div className="flex lg:hidden">
      <button type="button" onClick={()=>menuDisplayHandler()} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 menu-toggler" aria-label="Toggle menu">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
        </svg>
      </button>
    </div>

    <ul className="items-center justify-around hidden space-x-8 lg:flex nav-links">
      <li>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
          Blog
        </NavLink>
      </li>
    </ul>

    <button className="start-applying-btn hidden lg:inline">Start Applying</button>
  </div>

  <div className={`lg:hidden ${!isMenuOpen && "hidden"}`}>
    <div className="px-2 pt-2 pb-3 small-menu">
      <NavLink to='/' className={({ isActive }) => (isActive ? 'block text-blue-600' : 'block text-gray-500')}>
        Home
      </NavLink>
      <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'block text-blue-600' : 'block text-gray-500')}>
        Statistics
      </NavLink>
      <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'block text-blue-600' : 'block text-gray-500')}>
        Applied Jobs
      </NavLink>
      <NavLink to='/blog' className={({ isActive }) => (isActive ? 'block text-blue-600' : 'block text-gray-500')}>
        Blog
      </NavLink>

      <button className="start-applying-btn mt-5">Start Applying</button>
    </div>
  </div>
</div>


  );
};

export default Header;