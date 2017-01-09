## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Home
  - NavBarContainer
  - Footer

**PhotoIndex**
  - NavBarContainer
  - Footer

**PhotoContainer**
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

**PhotoStream**

**Footer**
  - FooterItems


|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/photos/:photoId" | "PhotoContainer" |
| "/home/user" | "UserContainer" |
| "/home/user/album" | "AlbumContainer" |
| "/home/user/photoStream" | "PhotoStream" |
| "/home/tags" | "TagsContainer" |
