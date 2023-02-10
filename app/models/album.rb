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
    validates :title, :year, :artist_id, presence: true

    belongs_to :artist

    has_many :songs,
        foreign_key: :album_id,
        dependent: :destroy
end
