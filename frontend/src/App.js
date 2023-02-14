import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
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
      <Navigation className="naviOuter"/>
        <Sidebar />
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
            {/* <Album /> */}
            <div>
              
            </div>
          </Route>
        </Switch>
    </>
  );
}

export default App;
