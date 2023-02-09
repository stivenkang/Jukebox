class Song < ApplicationRecord
    validates :title, :audio_url, :album_id, :artist_id, presence: true

    belongs_to :user
    belongs_to :artist
    belongs_to :album
    belongs_to :playlist
end
