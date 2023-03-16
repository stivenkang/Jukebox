import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../assets/spotify-logo-inverted.png';
import './Navigation.css';
import SideBar from '../SideBar/SideBar';
import PlayBar from '../PlayBar/PlayBar';

function Navigation() {
  const location = useLocation();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='navTop'>
          <a href="https://www.linkedin.com/in/stiven-kang-69a9ab258/">
            <i id='navLinkedIn' class="fa-brands fa-linkedin"></i>
          </a>
          <br/>
          <a href="https://github.com/stivenkang">
            <i id='navGithub' class="fa-brands fa-github"></i>
          </a>
          <br/>
          <ProfileButton user={sessionUser} />
        </div>
        <SideBar />
        <PlayBar />
      </>
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
        <SideBar />
        <PlayBar />
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