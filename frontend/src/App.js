import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation/index';
import Body from './components/MainBody/index';
import SideBar from './components/SideBar/index';
import PlayBar from './components/PlayBar/index';
import TopBar from './components/TopBar/index';
import './index.css';
// import './components/Sidebar/Sidebar.css';

// import { fetchAlbum } from './store/album';
// import { useDispatch } from 'react-redux';



function App() {

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchAlbum(1))
  // })

  return (
    <>
      {/* <Navigation className="navOuter"/> */}
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
            {/* <Album /> */}
            <TopBar />
            <div className='homePage'>
              <SideBar />
              <div className='body' style={{display: "flex", flexDirection: "column"}}>
                <Navigation />
                <Body />
              </div>
            </div>
            <PlayBar />
          </Route>
        </Switch>
    </>
  );
}

export default App;
