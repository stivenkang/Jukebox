import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../assets/spotify-logo-inverted.png';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else if (location.pathname === '/signup' || location.pathname === '/login') {
    return null
  } else {
    sessionLinks = (
      <>
        <div className='navTop'>
          <NavLink className='navSignup' to="/signup">Sign Up</NavLink>
          <NavLink className='navLogin' to="/login">Log In</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className='nav'>
      <ul className='topButtons'>
        <li >
          {sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;