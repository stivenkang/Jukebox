# json.album do
#     json.partial! '/api/albums/album', album: @album
# end

# json.artist do
#     json.partial! '/api/artists/artist', artist: @artist
# end


json.album do
    json.partial! '/api/albums/album', album: @album

    # json.array! 'songs' do
    #     @songs do |song|
    #         json.extract! song, :title, 
    #         json.artist song.artist.name
    #     end
    # end
end