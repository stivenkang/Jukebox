class Album < ApplicationRecord
    validates :title, presence: true

    belongs_to :artist

    has_many :songs,
        dependent: :destroy
end
