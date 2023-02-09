class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :audio_url, null: false
      t.references :artist, null: false
      t.references :album

      t.timestamps
    end
  end
end
