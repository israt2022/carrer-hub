import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Bars3BottomRightIcon, XMarkIcon, } from '@heroicons/react/24/solid'

const Header = () => {
  // const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div className='px-4 py-4 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <h1 className='text-xl font-bold'>JobInventory</h1>

          <ul className='items-center justify-around hidden space-x-8 lg:flex'>
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

          <button className='btn'>Star Applying</button>
      </div>
    </div>

  );
};

export default Header;