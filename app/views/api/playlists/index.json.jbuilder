@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :description, :author_id, :playlist_songs
    end
end
