## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - NavBarContainer
  - PhotoIndex
  - Footer

**PhotoIndex**

**PhotoIndexContainer**
  - PhotoIndex

**PhotoIndex**
  - PhotoIndexItem
      + username
      + title
      + description
      + time

**UserContainer**
  - NavBarContainer
  - OwnPhotos

**AlbumContainer**
  - AlbumIndex

**NavBarContainer**
  - NavBarItem

**TagsContainer**
  - PhotoIndex
  - AlbumIndex


**Footer**
  - FooterItems


|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/photos/:photoId" | "PhotoContainer" |
| "/user/:userId" | "UserContainer" |
| "/user/:userId/album/:albumId" | "AlbumContainer" |
| "/user/:userId/photoIndex" | "PhotoIndex" |
| "/tags" | "TagsContainer" |
