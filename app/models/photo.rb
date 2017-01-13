class Photo < ActiveRecord::Base
  validates :image_url, :user, :thumb_url, presence: true

  belongs_to(:user,
            foreign_key: :user_id,
            class_name: 'User')

  
end
