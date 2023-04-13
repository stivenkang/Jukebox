export const RECEIVE_CURRENT_SONG = 'currentSong/RECEIVE_CURRENT_SONG';

export const receiveCurrentSong = (songId) => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songId
    }
};

const currentSongReducer = (state={}, action) => {
    // const newState = {...state};

    switch(action.type) {
        case RECEIVE_CURRENT_SONG:
            return action.songId; // may have to use another useselector the get the song
        default:
            return state;
    }
};

export default currentSongReducer;