class UpdateAlbumsagainandagain < ActiveRecord::Migration
  def change
    remove_column :albums, :album_url
    remove_column :albums, :description
  end
end
