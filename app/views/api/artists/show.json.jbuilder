# json.artist do
#     json.partial! '/api/artists/artist', artist: @artist
# end

@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name, :description
    end
end