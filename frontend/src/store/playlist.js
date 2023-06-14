import csrfFetch from './csrf';
import { ADD_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from './playlistSong';
// import { RECEIVE_PLAYLIST_SONGS, fetchPlaylistSongs } from './playlistSong';

export const RECEIVE_PLAYLISTS = 'playlists/receivePlaylists'
export const RECEIVE_PLAYLIST = 'playlists/receivePlaylist'
export const REMOVE_PLAYLIST = 'playlists/removePlaylist'

const receivePlaylists = (playlists) => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    }
}

const receivePlaylist = (payload) => {
    return {
        type: RECEIVE_PLAYLIST,
        payload
    }
}

const removePlaylist = (playlistId) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId
    }
}

export const getPlaylist = (playlistId) => (state) => state.playlists ? state.playlists[playlistId] : null
export const getPlaylists = (state) => state.playlists ? Object.values(state.playlists) : []

export const fetchPlaylists = () => async dispatch => {
    const res = await csrfFetch(`/api/playlists`)
    const playlists = await res.json()
    return dispatch(receivePlaylists(playlists))
}

export const fetchPlaylist = (playlistId) => async dispatch => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`)
    // if (res.ok) {
        const playlist = await res.json()
        return dispatch(receivePlaylist(playlist))
    // }
}

// fetching playlist songs
// export const fetchPLSongs = (playlistId) => async dispatch => {
//     const res = await fetch(`/api/playlists/${playlistId}/playlistSongs`)
//     const data = await res.json()
//     return dispatch(fetchPlaylistSongs(data))
// }

export const createPlaylist = (playlist) => async dispatch => {
    const res = await csrfFetch(`/api/playlists`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({playlist: playlist})
        // body: JSON.stringify(playlist)
    });
    if (res.ok) {
        const newPlaylist = await res.json()
        dispatch(receivePlaylist(newPlaylist))
        return newPlaylist;
    }

    // if (res.ok) {
    //     const data = await res.json()
    //     dispatch(receivePlaylist(data))
    // }
}

export const updatePlaylist = (updatedPlaylist) => async dispatch => {
    const { id, title } = updatedPlaylist;
    const res = await csrfFetch(`/api/playlists/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
  
    if (res.ok) {
      const data = await res.json();
      dispatch(receivePlaylist(data));
      return data;
    }
}

// export const updatePlaylist = (playlistId, updatedPlaylist, songId) => async (dispatch, getState) => {
//     const { playlists } = getState();
//     // const playlistArray = Object.values(playlists);
//     debugger

//     // Find the existing playlist object
//     // let existingPlaylist = playlistArray.find((playlist) => playlist.id === playlistId);
//     let existingPlaylist = playlists[playlistId]

//     if (!existingPlaylist) {
//         console.error('Playlist not found');
//         return;
//     }

//     // Remove the song from the playlistSongs array
//     const updatedPlaylistSongs = existingPlaylist.playlistSongs.filter(
//         (playlistSong) => playlistSong.songId !== songId
//     );

//     // Create the updated playlist object with the modified playlistSongs array
//     const updatedPlaylistObject = {
//         ...existingPlaylist,
//         ...updatedPlaylist,
//         playlistSongs: updatedPlaylistSongs,
//     };
  
//     const res = await csrfFetch(`/api/playlists/${playlistId}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedPlaylistObject),
//     });
  
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(receivePlaylist(data));
//       return data;
//     }
// };

export const deletePlaylist = (playlistId) => async dispatch => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        dispatch(removePlaylist(playlistId))
    }
}

const playlistsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_PLAYLISTS:
            for (const playlist in action.playlists) {
                const songIds = action.playlists[playlist].playlistSongs.map((playlistSong) => playlistSong.song_id);
                newState[playlist] = { ...action.playlists[playlist], playlistSongs: songIds };
            };  
            return newState;
        case RECEIVE_PLAYLIST:
            const playlistId = action.payload.playlist.id;
            newState[playlistId] = {
                ...newState[playlistId],
                ...action.payload.playlist
            };
            return newState;
        case REMOVE_PLAYLIST:
            delete newState[action.playlistId]
            return newState;
        case ADD_PLAYLIST_SONG:
            newState[action.playlistSong.playlistSong.playlistId].playlistSongs.push(action.playlistSong.song)
            return newState;
        case REMOVE_PLAYLIST_SONG:
            delete newState[action.playlistSong.playlistSong_id]
            return newState
        default:
            return state;
    }
}

export default playlistsReducer;