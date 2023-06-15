json.set! 'playlist_song' do
    json.extract! @playlist_song, :id, :playlist_id, :song_id
end

# json.song do
#     json.extract! @song, :id, :title, :artist_id, :album_id, :song_url
# end


# json.song do
#     @songs.each do |song|
#         json.set! song.id do
#             json.extract! song, :id, :title, :artist_id, :album_id, :song_url
#         end
#     end
# end
