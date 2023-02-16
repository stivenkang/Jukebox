# json.extract! @artists, :id, :name, :description

@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name, :description
        # json.photoUrl url_for(artist.photo)
    end
end