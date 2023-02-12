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
    // <div className='home'>
    //   <div className='sidebar'>
    //     <p>sidebar</p>
    //   </div>
    //   <ul>
    //     <li className='topButtons'>
    //       <NavLink exact to="/">Home</NavLink>
    //       {sessionLinks}
    //     </li>
    //   </ul>
    // </div>

    <div className='home'>
      <div className='sidebar'>
        <img className='homeLogo' src={logo} alt='' />
        <br/>
        <NavLink className='homeButton' exact to="/"><i class="fa-solid fa-house"></i><span style={{marginLeft: '15px'}}>Home</span></NavLink>
        <br/>
        <NavLink className='searchButton' exact to="/search"><i class="fa-solid fa-magnifying-glass"></i><span style={{marginLeft: '15px'}}>Search</span></NavLink>
      </div>
      <ul>
        <li className='topButtons'>
          {sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;