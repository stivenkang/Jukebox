import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import sessionReducer from './session';
import albumsReducer from './album';
import artistsReducer from './artist';
import songsReducer from './song';
import currentSongReducer from './currentSong';
import playlistsReducer from './playlist';
import playlistSongsReducer from './playlistSong';

const rootReducer = combineReducers({
    session: sessionReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    songs: songsReducer,
    currentSong: currentSongReducer,
    playlist: playlistsReducer,
    playlistSong: playlistSongsReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;