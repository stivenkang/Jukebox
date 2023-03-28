json.set! 'artist' do
    json.extract! @artist, :id, :name, :description
    json.photoUrl url_for(@artist.photo)
end

@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name, :description
        # json.photoUrl url_for(artist.photo)
    end
end



# json.set! 'albums' do
#     @albums.each do |album|
#         json.set! album.id do
#             json.extract! album, :id, :title, :year, :artist_id
#             # json.coverUrl url_for(album.cover)
#         end
#     end
# end