# json.song do
#     json.partial! '/api/songs/song', song: @songs
# end

# json.artist do
#     json.partial! '/api/artists/artist', artist: @artist.artist
# end

# json.album do
#     json.partial! '/api/albums/album', album: @song.album
# end


json.song do
    json.partial! '/api/songs/song', song: @song

    json.set! 'artist' do
        json.extract! @song.artist, :name
    end

    json.set! 'album' do
        json.extract! @song.album, :title
    end
end