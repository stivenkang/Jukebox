# == Schema Information
#
# Table name: songs
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  artist_id        :bigint           not null
#  album_id         :bigint
#  playlist_song_id :bigint
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Song < ApplicationRecord
    validates :title, :artist_id, presence: true

    # belongs_to :artist
    belongs_to :album
    # belongs_to :playlist_song
end
