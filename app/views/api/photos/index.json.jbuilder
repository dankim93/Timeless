# json.array!(@photos) do |photo|
#   json.partial!('photo', photo: photo)
# end

@photos.each do |photo|
  json.set! photo.id do
    json.id photo.id
    json.image_url photo.image_url
    json.title photo.title
    json.description photo.description
    json.user_id photo.user_id
    json.album_id photo.album_id
    json.username photo.user.username
    json.profile_url photo.user.profile_url
  end
end
