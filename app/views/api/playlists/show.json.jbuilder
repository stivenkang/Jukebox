json.set! 'playlist' do
    json.extract! @playlist, :id, :title, :description, :author_id, :song_id
end

json.user do
    # json.partial! '/api/users/user', user: playlist.author
    json.extract! @playlist.user, :username
end

json.playlist_song do
    @playlist_songs.each do |playlist_song|
        json.set! playlist_song.id do
            playlist_song.extract! playlist_song, :id, :playlist_id, :song_id
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

