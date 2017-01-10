```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    comment: {errors: ["Comment can't be blank"]}
  },
  photos: {
    1: {
      title: "Sample Photo",
      body: "Photo description",
      url: "",
      username: "DAN"
      user_id: 1,
      album_id: 1
      tags: []
      },
      comments: {
        1: {
          body: "amazing photo!",
          user_id: 1,
          photo_id: 1
        }
      }
    }
  },
  currentPhoto: {
    title: 'favorite night',
    username: 'DAN',
    comments: {
      1: {
        body: "nice photo",
        user_id: 1,
        photo_id: 1
      }
    }
    tags: []
    user_id: 1,
    album_id: 1 // null
  },
  albums: {
    1: {
      title: "Redux",
      description: "is cool"
    }
  },
  currentAlbum: {
    title: 'San Francisco',
    user_id: 1,
    header_image_id: 1
    photos: {
      1: {
        title: 'sample photo',
        username: 'dan',
        url: "",
        user_id: 1,
        album_id,
        tags:[]
      }
    }
  }
}
```
