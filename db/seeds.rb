# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest', password: 'password', profile_url: "http://res.cloudinary.com/dyjarpgbt/image/upload/c_crop,r_0/v1484533001/pexels-photo-63937_utf6qa.jpg")
User.create(username: 'dankim', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/girl-forest-nature-stroll-160627_ewnzti.jpg')
User.create(username: 'Linn Marlen', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/pexels-photo-24648_fruerp.jpg')
User.create(username: 'Elizabeth', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/pexels-photo-93017_nyf6o0.jpg')
User.create(username: 'Kavan Cardoza', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484533190/pexels-photo-190956_n4t191.jpg')
User.create(username: 'Phil', password: 'password', profile_url: "http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/pexels-photo-94645_vvyx9q.jpg")

Photo.create(image_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg', title: 'Berkeley', description: 'San Francisco view from Berkeley', user_id: 1, thumb_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg')
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332442/pexels-photo-287240_kfac3f.jpg', title: 'Vacation', description: 'Hiking during summer', user_id: 3, thumb_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg')
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332576/sea-mountains-ocean-rocks_ahvnqa.jpg', title: 'SF', description: 'Golden Gate Bridge', user_id: 4, thumb_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg')
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332438/pexels-photo-200303_jkgqpy.jpg', title: 'Dual screen', description: 'Working with multi-screen', user_id: 5, thumb_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg')
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332445/pexels-photo-213347_irypfm.jpg', title: 'Tunnel', description: 'Going through a tunnel during Christmas break', user_id: 6, thumb_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg')
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332433/pexels-photo-48727_fdbn50.jpg', title: 'Work setup', description: 'Time to study', user_id: 2, thumb_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg')

Album.create(title: 'Views', description: 'Beautiful pictures of views', user_id: 3)
Album.create(title: 'Daily life', description: 'Daily stuff', user_id: 1)
