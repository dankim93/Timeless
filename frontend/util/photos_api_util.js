export const fetchPhotos = () => {
  $.ajax({
    method: 'GET',
    url: `/api/photos`,
  });
};

export const fetchPhoto = id => {
  $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  });
};

export const createPhoto = (photo) => {
  $.ajax({
    url: '/api/photos',
    type: "POST",
    data: { photo }
  });
};

export const deletePhoto = (id) => {
  $.ajax({
    type: "DELETE",
    url: `/api/photos/${id}`
  });
};
