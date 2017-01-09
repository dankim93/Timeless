# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
  - Notes index/search
  - accepts `tag_name` query param to list photos by tag
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/photos`
  - index of all photos for an album

### Comments

- `POST /api/comments`
  - takes body, user_id, photo_id
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Tags

- A photo's tags will be included in the photo show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/photos/:note_id/tags`: add tag to photo by name
  - if note doesn't already exist, it will be created
- `DELETE /api/photos/:photo_id/tags/:tag_name`: remove tag from photo by
  name
