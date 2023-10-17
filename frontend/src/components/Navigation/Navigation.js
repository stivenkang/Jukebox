import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import PlayBar from "../PlayBar/PlayBar";
// import SideBar from "../SideBar/SideBar";
import SearchBar from "../SearchBar/SearchBar";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  let searchBar = null;
  if (location.pathname === "/search") {
    searchBar = <SearchBar />;
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="navTop">
          <NavLink className='navPrev' to='#' onClick={() => history.goBack()}>{'<'}</NavLink>
          <NavLink className='navNext' to='#' onClick={() => history.goForward()}>{'>'}</NavLink>

          <div className="searchFunc">
            {searchBar}
          </div>
          <div className='icons'>
            <a href="https://www.linkedin.com/in/stiven-kang-69a9ab258/">
              <i id="navLinkedIn" className="fa-brands fa-linkedin"></i>
            </a>
            <br />
            <a href="https://github.com/stivenkang">
              <i id="navGithub" className="fa-brands fa-github"></i>
            </a>
            <br />
            <ProfileButton user={sessionUser} />
          </div>
        </div>
        {/* <SideBar /> */}
        <PlayBar />
      </>
    );
  } else if (
    location.pathname === "/signup" ||
    location.pathname === "/login"
  ) {
    return null;
  } else {
    sessionLinks = (
      <>
        <div className="navTopLoggedOut">
          <NavLink className="navSignup" to="/signup">
            Sign Up
          </NavLink>
          <NavLink className="navLogin" to="/login">
            Log In
          </NavLink>
        </div>
        {/* <SideBar /> */}
        <PlayBar />
      </>
    );
  }

  return (
    <div>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
