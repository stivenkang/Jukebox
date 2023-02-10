json.playlist do
    json.partial! 'api/playlists/playlist', playlist: @playlist
end

json.user do
    json.partial! 'api/users/user', user: @user
end