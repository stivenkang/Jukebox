# json.extract! @playlist, :id, :title, :description, :author_id, :song_id


@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :description, :author_id, :playlist_songs
    end
end

# instead of author_id, would it be better to have user_id or will that overlap with the user?