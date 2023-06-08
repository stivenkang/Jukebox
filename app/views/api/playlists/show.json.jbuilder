# json.set! 'playlist' do
#     json.extract! @playlist, :id, :title, :description, :author_id, :playlist_songs
# end

# json.playlist_song do
#     @playlist.playlist_songs.each do |playlist_song|
#         json.set! playlist_song.id do
#             json.extract! playlist_song, :id, :playlist_id, :song_id
#         end
#     end
# end


json.set! 'playlist' do
    json.extract! @playlist, :id, :title, :description, :author_id
  
    json.playlist_songs do
        @playlist.playlist_songs.each do |playlist_song|
            json.extract! playlist_song, :id, :playlist_id, :song_id
        end
    end
end


json.user do
    json.extract! @playlist.user, :username
end