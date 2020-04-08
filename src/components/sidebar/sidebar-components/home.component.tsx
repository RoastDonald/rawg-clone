import React from 'react';
import { NavLink } from 'react-router-dom';
export const Home: React.FC = () => (
  <div>
    <NavLink to='/' className='sidebar__title'>
      Home
    </NavLink>
  </div>
);
