json.set! 'album' do
    json.extract! @album, :id, :title, :year, :artist_id
    json.photoUrl url_for(@album.photo)
end

json.artist do
    # json.partial! '/api/artists/artist', artist: @artist

    @artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name, :description
            json.photoUrl url_for(artist.photo)
        end
    end
    
end

# need to check if this is correct
json.song do
    @songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :artist_id, :album_id, :song_url
        end
    end
end




# json.album do
#     json.partial! '/api/albums/album', album: @album

#     # json.array! 'songs' do
#     #     @songs do |song|
#     #         json.extract! song, :title, 
#     #         json.artist song.artist.name
#     #     end
#     # end
# end
