# json.extract! @playlist, :id, :title, :description, :author_id, :song_id


@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :description, :author_id, :song_id
    end
end