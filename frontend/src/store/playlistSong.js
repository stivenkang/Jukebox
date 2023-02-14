const RECEIVE_PLAYLIST_SONGS = 'playlistSong/receivePlaylistSongs'
const RECEIVE_PLAYLIST_SONG = 'playlistSong/receivePlaylistSong'
const REMOVE_PLAYLIST_SONG = 'playlistSong/removePlaylistSong'

const receivePlaylistSongs = (playlistSongs) => {
    return {
        type: RECEIVE_PLAYLIST_SONGS,
        playlistSongs
    }
}

const receivePlaylistSong = (playlistSong) => {
    return {
        type: RECEIVE_PLAYLIST_SONG,
        playlistSong
    }
}

const removePlaylistSong = (playlistSongId) => {
    return {
        type: REMOVE_PLAYLIST_SONG,
        playlistSongId
    }
}

export const getPlaylistSong = (playlistSongId) => (state) => state.playlistSongs ? state.playlistSongs[playlistSongId] : null
export const getPlaylistSongs = (state) => state.playlistSongs ? Object.values(state.playlistSongs) : []

export const fetchPlaylistSongs = () => async dispatch => {
    const res = await fetch(`/api/playlistSongs`)
    if (res.ok) {
        const playlistSongs = await res.json()
        dispatch(receivePlaylistSongs(playlistSongs))
    }
}

export const fetchPlaylistSong = (playlistSongId) => async dispatch => {
    const res = await fetch(`/api/playlistSongs/${playlistSongId}`)
    if (res.ok) {
        const playlistSong = await res.json()
        dispatch(receivePlaylistSong(playlistSong))
    }
}

export const createPlaylistSong = (playlistSong) => async dispatch => {
    const res = await fetch(`/api/playlistSongs`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(playlistSong)
    })
    if (res.ok) {
        const playlistSong = await res.json()
        dispatch(receivePlaylistSong(playlistSong))
    }
}

export const deletePlaylistSong = (playlistSongId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistSongId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(removePlaylistSong(playlistSongId))
    }
}

const playlistSongsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_PLAYLIST_SONGS:
            return {...state, ...action.playlistSongs}
        case RECEIVE_PLAYLIST_SONG:
            newState[action.playlistSong.id] = action.playlistSong
            return newState;
        case REMOVE_PLAYLIST_SONG:
            delete newState[action.playlistSongId]
            return newState;
        default:
            return state;
    }
}

export default playlistSongsReducer;