import csrfFetch from "./csrf"

export const RECEIVE_PLAYLIST_SONGS = 'playlistSong/receivePlaylistSongs'
// const RECEIVE_PLAYLIST_SONG = 'playlistSong/receivePlaylistSong'
export const REMOVE_PLAYLIST_SONG = 'playlistSong/removePlaylistSong'
export const ADD_PLAYLIST_SONG = 'playlistSong/addPlaylistSong'

const receivePlaylistSongs = (playlistSongs) => {
    return {
        type: RECEIVE_PLAYLIST_SONGS,
        playlistSongs
    }
}

// const receivePlaylistSong = (payload) => {
//     return {
//         type: RECEIVE_PLAYLIST_SONG,
//         payload
//     }
// }

const removePlaylistSong = (playlistSongId) => {
    return {
        type: REMOVE_PLAYLIST_SONG,
        playlistSongId
    }
}

const addPlaylistSong = (playlistSong) => {
    return {
        type: ADD_PLAYLIST_SONG,
        playlistSong
    }
}

export const getPlaylistSong = (playlistSongId) => (state) => state.playlistSongs ? state.playlistSongs[playlistSongId] : null
export const getPlaylistSongs = (state) => state.playlistSongs ? Object.values(state.playlistSongs) : []

export const fetchPlaylistSongs = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}/playlistSongs`)
    if (res.ok) {
        const playlistSongs = await res.json()
        dispatch(receivePlaylistSongs(playlistSongs))
    }
}

export const createPlaylistSong = (playlistId, songId) => async dispatch => {
    const res = await csrfFetch(`/api/playlist_songs`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({playlist_song: {playlistId, songId}})
    })
    if (res.ok) {
        const playlistSong = await res.json()
        // debugger
        dispatch(addPlaylistSong(playlistSong))
    }
}

export const deletePlaylistSong = (playlist_songId) => async dispatch => {
    const res = await csrfFetch(`/api/playlist_songs/${playlist_songId}`, {
        method: 'DELETE',
        headers: {'Content-Type' : 'application/json'},
        // body: JSON.stringify({playlist_song: {playlistId, songId}})
    })

    if (res.ok) {
        const playlistSong = await res.json()
        debugger
        dispatch(removePlaylistSong(playlistSong))
    }
}

const playlistSongsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_PLAYLIST_SONGS:
            return {...newState, ...action.playlistSongs}
        // case RECEIVE_PLAYLIST_SONG:
        //     newState[action.payload.playlistSong.id] = action.payload.playlistSong
        //     return newState;
        // case ADD_PLAYLIST_SONG:
        //     newState[action.playlistSong.id] = action.playlistSong;
        //     return newState;
        // case REMOVE_PLAYLIST_SONG:
        //     delete newState[action.playlistSongs.songId]
        //     return newState;
        default:
            return state;
    }
}

export default playlistSongsReducer;