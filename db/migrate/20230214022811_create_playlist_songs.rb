class CreatePlaylistSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :playlist_songs do |t|
      t.references :playlist, null: false, index: true
      t.references :song, null: false, index: true
      t.timestamps
    end
  end
end
