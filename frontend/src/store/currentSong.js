export const RECEIVE_CURRENT_SONG = 'currentSong/RECEIVE_CURRENT_SONG';

// export const PLAY_NEXT_SONG = 'currentSong/PLAY_NEXT_SONG';
// export const PLAY_PREVIOUS_SONG = 'currentSong/PLAY_PREVIOUS_SONG';

export const receiveCurrentSong = (songId) => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songId
    }
};

// export const playNextSong = () => {
//     return {
//       type: PLAY_NEXT_SONG
//     };
// };
  
// export const playPreviousSong = () => {
//     return {
//       type: PLAY_PREVIOUS_SONG
//     };
// };

const currentSongReducer = (state={}, action) => {
    // const newState = {...state};

    switch(action.type) {
        case RECEIVE_CURRENT_SONG:
            return action.songId; // may have to use another useselector the get the song
        // case PLAY_NEXT_SONG:
        //     // Logic to find the next song and update the state
        //     // Update the currentSong state with the ID of the next song
        //     // Example: return nextSongId;
        // case PLAY_PREVIOUS_SONG:
        //     // Logic to find the previous song and update the state
        //     // Update the currentSong state with the ID of the previous song
        //     // Example: return previousSongId;
        default:
            return state;
    }
};

export default currentSongReducer;