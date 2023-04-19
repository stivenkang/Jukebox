json.set! 'album' do
    json.extract! @album, :id, :title, :year, :artist_id
    json.photoUrl url_for(@album.photo)
end

json.artist do
    json.extract! @artist, :id, :name, :description
    # @artists.each do |artist|
    #     json.set! artist.id do
    #         json.extract! artist, :id, :name, :description
    #         json.photoUrl url_for(artist.photo)
    #     end
    # end
    
end

# need to check if this is correct
json.song do
    @songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :artist_id, :album_id, :song_url
        end
    end
end

