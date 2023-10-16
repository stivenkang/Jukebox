// import { merge } from 'lodash';

export const RECEIVE_CURRENT_SONG = 'currentSong/RECEIVE_CURRENT_SONG';
export const PLAY_NEXT_SONG = 'currentSong/PLAY_NEXT_SONG';
export const PLAY_PREVIOUS_SONG = 'currentSong/PLAY_PREVIOUS_SONG';


export const receiveCurrentSong = (songId) => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songId
    };
};

export const playNextSong = (songId) => {
    return {
      type: PLAY_NEXT_SONG,
      songId
    };
};
  
export const playPreviousSong = (songId) => {
    return {
      type: PLAY_PREVIOUS_SONG,
      songId
    };
};

const currentSongReducer = (state={}, action) => {
    // const newState = {...state};
    // const newState = merge({}, state)

    switch(action.type) {
        case RECEIVE_CURRENT_SONG:
            return action.songId;
        case PLAY_NEXT_SONG:
            return action.songId;
        case PLAY_PREVIOUS_SONG:
            return action.songId;
        default:
            return state;
    }
};

export default currentSongReducer;