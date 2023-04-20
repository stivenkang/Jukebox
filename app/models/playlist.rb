# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  author_id   :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Playlist < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User,

    has_many :playlist_songs,
        foreign_key: :playlist_id,
        class_name: :PlaylistSong,
        dependent: :destroy

    # does I need below? Technically playlist can have many artists but artist does not belong to a playlist
    # has_many :artists,
    #     through: :playlist_songs,
    #     source: :artist,
    #     dependent: :destroy

end
