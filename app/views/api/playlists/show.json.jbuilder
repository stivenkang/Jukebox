json.playlist do
    json.partial! 'api/playlists/playlist', playlist: @playlist
end

json.author do
    json.partial! '/api/users/user', user: playlist.author
end