class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.timestamps null: false
    end
  end
end