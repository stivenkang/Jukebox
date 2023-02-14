class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :title, null: false, unique: true
      t.text :description
      t.references :author, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
