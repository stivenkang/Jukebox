# json.extract! @album, :id, :title, :year, :artist_id

@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :year, :artist_id
        # json.artist album.artist.name
    end
end