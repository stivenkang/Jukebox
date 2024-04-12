# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  artist_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
    validates :title, :year, :artist_id, :photo_url, presence: true

    belongs_to :artist

    has_many :songs,
        foreign_key: :album_id,
        dependent: :destroy

    # has_one_attached :photo
end
