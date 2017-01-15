json.extract!(
  photo,
    :id, :image_url, :title, :description, :user_id, :album_id, :thumb_url
)
json.set!(:username, photo.user.username)
json.set!(:profile_url, photo.user.profile_url)
