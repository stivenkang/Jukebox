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
    validates :name, presence: true
    validates :description, presence: true

    has_many :songs,
        foreign_key: :song_id,
        class_name: :Song,
        dependent: :destroy

    has_many :albums,
        through: :songs
        foreign_key: :album_id,
        class_name: :Album
end
