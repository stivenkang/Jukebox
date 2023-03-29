# json.extract! @song, :id, :title, :artist_id, :album_id


@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :artist_id, :album_id, :song_url
    end
end