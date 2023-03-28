class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :song_url, null: false
      t.references :artist, null: false, foreign_key: true #, foreign_key: { to_table: :artists }
      t.references :album
      t.references :playlist_song

      t.timestamps
    end
  end
end
