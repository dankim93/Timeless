class ChangeProfile < ActiveRecord::Migration
  def change
    change_column :users, :profile_url, :string, :default => "http://res.cloudinary.com/dyjarpgbt/image/upload/v1484882716/default-user-image_aynbrf.png"
  end
end
