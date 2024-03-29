# == Schema Information
#
# Table name: playlist_songs
#
#  id          :bigint           not null, primary key
#  playlist_id :bigint           not null
#  song_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class PlaylistSong < ApplicationRecord
    validates :playlist_id, :song_id, presence: false

    belongs_to :playlist,
        foreign_key: :playlist_id,
        class_name: :Playlist

    belongs_to :song,
        foreign_key: :song_id,
        class_name: :Song
end
