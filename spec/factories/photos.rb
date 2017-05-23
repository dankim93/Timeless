# create_table "photos", force: :cascade do |t|
#   t.string   "image_url",   null: false
#   t.string   "title",       null: false
#   t.string   "description", null: false
#   t.integer  "user_id",     null: false
#   t.integer  "album_id"
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
#   t.string   "thumb_url"
# end
#
# add_index "photos", ["album_id"], name: "index_photos_on_album_id", using: :btree
# add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

FactoryGirl.define do
  factory :photo do
    image_url 'url'
    title 'test'
    description 'testing'
    user_id 1
  end
end
