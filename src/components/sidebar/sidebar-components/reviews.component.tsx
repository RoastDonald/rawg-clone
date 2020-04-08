import React from 'react';
import { NavLink } from 'react-router-dom';

export const Reviews: React.FC = () => (
  <div>
    <NavLink to='/reviews' className='sidebar__title'>
      Reviews
    </NavLink>
  </div>
);
