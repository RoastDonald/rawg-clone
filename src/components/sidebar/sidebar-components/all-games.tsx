import React from 'react';
import { NavLink } from 'react-router-dom';
export const AllGames: React.FC = () => (
  <div>
    <NavLink to='/' className='sidebar__title'>
      All Games
    </NavLink>
  </div>
);
