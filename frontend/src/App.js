import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation/index';
import Body from './components/MainBody/index';
import SideBar from './components/SideBar/index';
import PlayBar from './components/PlayBar/index';
import TopBar from './components/TopBar/index';
import ArtistsShowPage from './components/ArtistsShow';
// import ArtistsIndexItem from './components/ArtistsIndex/ArtistsIndexItem';
import './index.css';
// import './components/Sidebar/Sidebar.css';


function App() {

  return (
    <>
      <Navigation className="navOuter"/>
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/artists/:artistId">
            <TopBar />
            <SideBar />
            {/* <div className='body'>
              <Navigation />
              <Body />
            </div> */}
            <ArtistsShowPage />
            <PlayBar />
          </Route>
          <Route path="/">
            <TopBar />
            <SideBar />
            <div className='body'>
              <Navigation />
              <Body />
            </div>
            <PlayBar />
          </Route>
        </Switch>
    </>
  );
}

export default App;
