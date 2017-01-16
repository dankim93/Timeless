export const fetchAlbums = (data) => (
  $.ajax({
    method: 'GET',
    url: `/api/albums`,
    data: { data }
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  })
);

export const createAlbum = (album) => (
  $.ajax({
    url: '/api/albums',
    type: "POST",
    data: { album }
  })
);

export const deleteAlbum = (id) => (
  $.ajax({
    type: "DELETE",
    url: `/api/albums/${id}`
  })
);
