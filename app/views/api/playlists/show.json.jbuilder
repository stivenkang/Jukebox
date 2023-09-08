json.set! 'playlist' do
    json.extract! @playlist, :id, :title, :description, :author_id, :playlist_songs

    # json.set! 'playlist_songs' do
        @playlist.playlist_songs.each do |playlist_song|
            json.extract! playlist_song, :song_id
        end
        # why does adding :id into line 6 cause the playlist to be duplicated
    # end
end


json.user do
    json.extract! @playlist.user, :username
end