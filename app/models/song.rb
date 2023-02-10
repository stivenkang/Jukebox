# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  audio_url  :string           not null
#  artist_id  :bigint           not null
#  album_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
    validates :title, :audio_url, :album_id, :artist_id, presence: true

    belongs_to :user
    belongs_to :artist
    belongs_to :album
    belongs_to :playlist
end
