import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginForm";
import SignupFormPage from "./components/SignupFormPage/SignupForm";
import Navigation from "./components/Navigation/Navigation";
import ArtistIndex from "./components/ArtistsIndex/ArtistIndex"
import ArtistsShowPage from "./components/ArtistsShow/ArtistShow";
import AlbumShowPage from "./components/Albums/AlbumShow";
import SearchBar from "./components/SearchBar/SearchBar";
import PlaylistIndex from "./components/Playlists/PlaylistIndex";
import PlaylistCreate from "./components/Playlists/PlaylistCreate";
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
        <Route path="/albums/:albumId" component={AlbumShowPage} />
        <Route path="/search" component={SearchBar} />
        <Route path="/playlists/:playlistId" component={PlaylistCreate} />
        <Route path="/playlists" component={PlaylistIndex} />
        <Route exact path="/" component={ArtistIndex} />
      </Switch>
    </>
  );
}

export default App;
