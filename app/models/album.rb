class Album < ActiveRecord::Base
  validates :title, :description, presence: true

  has_many :photos
  belongs_to(:user,
            foreign_key: :user_id,
            class_name: 'User')
end
