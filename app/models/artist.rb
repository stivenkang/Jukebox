# == Schema Information
#
# Table name: artists
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Artist < ApplicationRecord
    validates :name, :description, presence: true

    has_many :songs,
        foreign_key: :song_id,
        dependent: :destroy

    has_many :albums,
        foreign_key: :album_id,
        dependent: :destroy

    has_one_attached :photo
end
