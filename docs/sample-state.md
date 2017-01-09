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
      user_id: 1,
      album_id: 1
      tags: {
        1: {
          id: 1
          name: "San Francisco"
        }
      },
      comments: {
        1: {
          body: "amazing photo!"
          user_id: 1
          photo_id: 1
        }
      }
    }
  },
  albums: {
    1: {
      title: "Redux",
      description: "is cool"
    }
  }
}
```
