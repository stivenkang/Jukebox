import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import SideBar from "../SideBar/SideBar";
import PlayBar from "../PlayBar/PlayBar";
import SearchBar from "../SearchBar/SearchBar";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();
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
          <div className="searchFunc">
            {searchBar}
          </div>
          <a href="https://www.linkedin.com/in/stiven-kang-69a9ab258/">
            <i id="navLinkedIn" class="fa-brands fa-linkedin"></i>
          </a>
          <br />
          <a href="https://github.com/stivenkang">
            <i id="navGithub" class="fa-brands fa-github"></i>
          </a>
          <br />
          <ProfileButton user={sessionUser} />
        </div>
        <SideBar />
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
        <div className="navTop">
          <NavLink className="navSignup" to="/signup">
            Sign Up
          </NavLink>
          <NavLink className="navLogin" to="/login">
            Log In
          </NavLink>
        </div>
        <SideBar />
        <PlayBar />
      </>
    );
  }

  return (
    <div className="nav">
        {sessionLinks}
    </div>
  );
}

export default Navigation;
