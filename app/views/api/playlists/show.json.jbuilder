json.playlist do
    # json.partial! 'api/playlists/playlist', playlist: @playlist
    json.extract! playlist, :id, :title, :description, :author_id, :song_ids
end

json.author do
    # json.partial! '/api/users/user', user: playlist.author
    json.extract! @playlist.user, :username
end

json.songs do
    @playlist.playlist_songs do |playlist_song|
        json.set! playlist_song.id do
            playlist_song.song.extract! song, :id, :title
        end
    end
end


# json.playlist do
#     json.partial! '/api/playlists/playlist' playlist: @playlist

#     json.author @playlist.user.username

#     json.songs do
#         @playlist.songs.each do |song|
#             json.extract! song, id: song.id, title: song.title, 
#             json.artist song.artist.name
#         end
#     end
# end

