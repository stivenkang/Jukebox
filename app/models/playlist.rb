# == Schema Information
#
# Table name: playlists
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text
#  public       :boolean          not null
#  author_id_id :bigint           not null
#  song_id      :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Playlist < ApplicationRecord
    validates :title, :user_id, :song_id, presence: true

    belongs_to :user
    has_many :songs,
        dependent: :destroy
end
