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
      {/* <div className='sidebar'>
        <img className='homeLogo' src={logo} alt='' />
        <div className='buttons'>
          <div className='homeButton'>
            <NavLink id='homeButton' exact to="/"><i className="fa-solid fa-house"></i><span style={{marginLeft: '15px'}}>Home</span></NavLink>
          </div>
          <br/>
          <div className='searchButton'>
            <NavLink id='searchButton' exact to="/search"><i className= "fa-solid fa-magnifying-glass"></i><span style={{marginLeft: '15px'}}>Search</span></NavLink>
          </div>
        </div>
      </div> */}
      <ul className='topButtons'>
        <li >
          {sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;