# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest', password: 'password', profile_url: "http://res.cloudinary.com/dyjarpgbt/image/upload/c_crop,r_0/v1484533001/pexels-photo-63937_utf6qa.jpg")
User.create(username: 'Dan Kim', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/girl-forest-nature-stroll-160627_ewnzti.jpg')
User.create(username: 'Linn Marlen', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/pexels-photo-24648_fruerp.jpg')
User.create(username: 'Elizabeth', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/pexels-photo-93017_nyf6o0.jpg')
User.create(username: 'Kavan Cardoza', password: 'password', profile_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484533190/pexels-photo-190956_n4t191.jpg')
User.create(username: 'Richard Hertzog', password: 'password', profile_url: "http://res.cloudinary.com/dyjarpgbt/image/upload/v1484428136/pexels-photo-94645_vvyx9q.jpg")
User.create(username: 'Lisa Houston', password: 'password', profile_url: "http://res.cloudinary.com/dyjarpgbt/image/upload/v1484851591/pexels-photo-196667_svoitr.jpg")

Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332433/pexels-photo-48727_fdbn50.jpg', title: 'Work setup', description: 'Time to study', user_id: 1, album_id: 1)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_66,w_1259/v1484934765/xq6tktqynji-oscar-soderlund_hf3pde.jpg', title: 'After Work', description: 'Taking a break', user_id: 1, album_id: 1)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/q_49/v1484934876/pexels-photo-247929_yv7dsd.jpg', title: 'Grocery', description: 'Mesmerizing sunday', user_id: 1, album_id: 1)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/q_60/v1484934879/london-street-phone-cabin-163037_slc5dk.jpg', title: 'London Street', description: 'London street phone cabin', user_id: 1, album_id: 3)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_49,w_1076/v1484934860/frjr1uh0qrm-averie-woodard_qthzwf.jpg', title: ':O', description: 'Amazing view', user_id: 1, album_id: 3)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/q_44/v1484934875/pexels-photo-230521_uihzyb.jpg', title: 'Morning', description: 'Let it begin', user_id: 1, album_id: 3)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_52,w_1260/v1484934860/jq_rrjgun3s-richard-nolan_qtbp7r.jpg', title: 'Randomness', description: 'There is a reason for everything', user_id: 1, album_id: 3)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_45,w_1298/v1484934857/6x90rjdo-wa-kristopher-allison_kiksbn.jpg', title: 'Where it all began', description: 'What am I doing?', user_id: 1, album_id: 3)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_40,w_1140/v1484934876/vj_9l20fzj0-modestas-urbonas_mnflel.jpg', title: 'San Francisco', description: 'GGB from above', user_id: 1, album_id: 2)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_50,w_1199/v1484934874/nxpuwmczpq8-evan-kirby_o1syg8.jpg', title: 'Trip', description: 'Enjoying life', user_id: 1, album_id: 2)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_52,w_1007/v1484934874/p2tq-3bh3oo-joshua-earle_rlwe9f.jpg', title: 'Backpacking', description: 'Whatever', user_id: 1, album_id: 2)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_61,w_1037/v1484934860/6xh7h5twj9c-arto-marttinen_nlq10r.jpg', title: 'Change', description: 'When everything else becomes smaller', user_id: 1, album_id: 2)

Photo.create(image_url: 'http://www.visitberkeley.com/images/header-rotation/OrangeSky_full_web.jpg', title: 'Berkeley', description: 'San Francisco view from Berkeley', user_id: 2, album_id: 6)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484869964/vwhugalpsmcwnvgvk9zz.jpg', title: 'Timeless', description: 'Not affected by time', user_id: 2, album_id: 4)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_46,w_1101/v1484934876/q1p7bh3shj8-nasa_neezqw.jpg', title: 'Outer Space', description: 'One day...', user_id: 2, album_id: 4)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_57,w_1159/v1484934879/kr2mdhj5qmg-luke-chesser_jff2k9.jpg', title: 'Truth', description: 'Yup, she left', user_id: 2, album_id: 5)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_49,w_1183/v1484934875/ohrodclnnu8-roman-mager_xvkqi7.jpg', title: 'Decision', description: 'Bike or Walk', user_id: 2, album_id: 5)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_52,w_1119/v1484934874/pexels-photo-26546_ft3jwh.jpg', title: 'Shopping', description: 'All of them', user_id: 2, album_id: 5)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_48,w_1016/v1484934859/eb6tchx5vzq-dozen_xq2yxe.jpg', title: 'SoCal', description: 'My hometown', user_id: 2, album_id: 5)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_47,w_1098/v1484934874/crkc1ws5e5k-dmitry-kotov_sfydrs.jpg', title: 'Glass Church', description: 'Get married at Palos Verdes?', user_id: 2, album_id: 5)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_56,w_1067/v1484934180/vncckgzd6bi-sandis-helvigs_yxlqlu.jpg', title: 'Unknown', description: 'Unknown', user_id: 2, album_id: 6)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_51,w_1092/v1484934877/ufomxgheugk-todd-diemer_c0xpul.jpg', title: 'Rain', description: 'I hate rain', user_id: 2, album_id: 6)

Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332442/pexels-photo-287240_kfac3f.jpg', title: 'Vacation', description: 'Hiking during summer', user_id: 3, album_id: 7)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_51,w_1226/v1484934857/3oiymgdkj6k-dariusz-sankowski_dayos0.jpg', title: 'Packing', description: 'Ready for the trip', user_id: 3, album_id: 7)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_64,w_1138/v1484934880/jidkrtjf8uk-amanda-sandlin_powwbo.jpg', title: 'Road Trip', description: 'Never ending story', user_id: 3, album_id: 7)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_59,w_1085/v1484934857/z0nvqfroqwa-denys-nevozhai_vvsoq7.jpg', title: 'Goal', description: 'Nothing special', user_id: 3, album_id: 7)

Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332576/sea-mountains-ocean-rocks_ahvnqa.jpg', title: 'SF', description: 'Golden Gate Bridge', user_id: 4, album_id: 8)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_56,w_1131/v1484934879/jktv__bqmaa-brooke-lark_cvjee1.jpg', title: 'Breakfast', description: 'Because she loves breakfast more than anything', user_id: 4, album_id: 8)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_52,w_831/v1484934876/vfun94cuy4o-david-marcu_yycktt.jpg', title: 'Biking', description: 'Biking with Dan', user_id: 4, album_id: 8)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/q_46/v1484934874/pexels-photo-209500_glol42.jpg', title: 'Coffee', description: 'Chugged it in 3 seconds', user_id: 4, album_id: 8)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/q_54/v1484934874/pexels-photo-200749_rc6xux.jpg', title: 'Wall Street', description: '2014 spring vacation', user_id: 4, album_id: 8)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_52,w_1152/v1484934858/bm0xrfeqm0a-michael-ramey_djczux.jpg', title: 'Leaving', description: '3 years', user_id: 4, album_id: 8)

Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332438/pexels-photo-200303_jkgqpy.jpg', title: 'Dual screen', description: 'Working with multi-screen', user_id: 5, album_id: 9)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484523932/pexels-photo-203218_mbn8jt.jpg', title: 'Library', description: 'Study Time', user_id: 5, album_id: 9)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/q_44/v1484934875/pexels-photo-230827_f2hwma.jpg', title: 'Lake', description: 'Great day to swim', user_id: 5, album_id: 9)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_49,w_1098/v1484934857/70rhtd11nnk-gabriel-beaudry_wrbn1j.jpg', title: 'Setup', description: 'Aw yea', user_id: 5, album_id: 9)

Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484332445/pexels-photo-213347_irypfm.jpg', title: 'Tunnel', description: 'Going through a tunnel during Christmas break', user_id: 6, album_id: 10)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_45,w_1166/v1484934876/som_pns3kwu-sweet-ice-cream-photography_ezjcqq.jpg', title: 'Me', description: 'How I Feel', user_id: 6, album_id: 10)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_47,w_1103/v1484934874/n7n-nkadhrm-chris-brignola_wr48yi.jpg', title: 'On the otherside', description: 'Missing good old days', user_id: 6, album_id: 10)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_56,w_1044/v1484934858/3nwgumlltlu-ben-warren_olrxdf.jpg', title: 'Surf', description: 'Can I surf?', user_id: 6, album_id: 10)

Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/v1484851591/skyline-buildings-new-york-skyscrapers_uj7yqh.jpg', title: 'NYC', description: 'City view', user_id: 7, album_id: 11)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/q_54/v1484934876/pexels-photo-288583_fkh2yq.jpg', title: 'Friends', description: 'Missing friends', user_id: 7, album_id: 11)
Photo.create(image_url: 'http://res.cloudinary.com/dyjarpgbt/image/upload/c_scale,q_51,w_1044/v1484934860/gmcc5_u0yzm-allef-vinicius_eqbnep.jpg', title: 'Home', description: 'Just bored', user_id: 7, album_id: 11)



Album.create(title: 'Daily life', user_id: 1)
Album.create(title: 'Views', user_id: 1)
Album.create(title: 'Hello World', user_id: 1)

Album.create(title: 'Timeless', user_id: 2)
Album.create(title: 'Forever Young', user_id: 2)
Album.create(title: 'The other side of me', user_id: 2)

Album.create(title: 'Fun with friends', user_id: 3)

Album.create(title: 'The Love of my Life', user_id: 4)

Album.create(title: 'A Day in the Sun', user_id: 5)

Album.create(title: 'Because I Am', user_id: 6)
Album.create(title: 'Memories', user_id: 7)
