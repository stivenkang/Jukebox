json.song do
    json.partial! '/api/songs/song', song: @songs
end

json.artist do
    json.partial! '/api/artists/artist', artist: @artist.artist
end

json.album do
    json.partial! '/api/albums/album', album: @song.album
end