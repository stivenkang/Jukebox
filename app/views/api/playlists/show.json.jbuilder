# json.playlist do
#     json.partial! 'api/playlists/playlist', playlist: @playlist
# end

# json.author do
#     json.partial! '/api/users/user', user: playlist.author
# end


json.playlist do
    json.partial! '/api/playlists/playlist' playlist: @playlist

    json.author @playlist.user.username

    json.songs do
        @playlist.songs.each do |song|
            json.extract! song, id: song.id, title: song.title, 
            json.artist song.artist.name
        end
    end
end