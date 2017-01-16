class Photo < ActiveRecord::Base
  validates :image_url, :user, :thumb_url, presence: true

  belongs_to(:user,
            foreign_key: :user_id,
            class_name: 'User')
  belongs_to(:album,
            foreign_key: :album_id,
            class_name: 'Album')
  has_many :comments

end
