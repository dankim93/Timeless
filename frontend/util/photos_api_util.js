export const fetchComments = (data) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments`,
    data: { data }
  })
);

export const createComment = (comment) => (
  $.ajax({
    url: '/api/comments',
    type: "POST",
    data: { comment }
  })
);

export const deleteComment = (id) => (
  $.ajax({
    type: "DELETE",
    url: `/api/comments/${id}`
  })
);
