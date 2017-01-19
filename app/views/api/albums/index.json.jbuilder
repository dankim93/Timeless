# json.array!(@albums) do |album|
#   json.partial!('album', album: album)
# end

@albums.each do |album|
  json.set! album.id do
    json.id album.id
    json.title album.title
    json.user_id album.user_id
    json.photos album.photos
  end
end
