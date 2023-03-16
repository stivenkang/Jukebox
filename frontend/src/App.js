import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginForm";
import SignupFormPage from "./components/SignupFormPage/SignupForm";
import Navigation from "./components/Navigation/Navigation";
import Body from "./components/MainBody/MainBody";
import ArtistsShowPage from "./components/ArtistsShow/ArtistShow";
import SearchBar from "./components/SearchBar";
// import ArtistsIndexItem from './components/ArtistsIndex/ArtistsIndexItem';
import "./index.css";
// import './components/Sidebar/Sidebar.css';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/login" component={LoginFormPage} />
        <Route path="/signup" component={SignupFormPage} />
        <Route path="/artists/:artistId">
          {/* <div className='body'>
              <Body />
            </div> */}
          <ArtistsShowPage />
        </Route>
        <Route path="/search" component={SearchBar} />
        <Route path="/" component={Body} />
      </Switch>
    </>
  );
}

export default App;
