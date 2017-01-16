import * as APIUtil from '../util/albums_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});

export const fetchAlbums = (filters) => dispatch => (
  APIUtil.fetchAlbums(filters).then(albums => dispatch(receiveAlbums(albums)))
);

export const fetchAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
);

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(newAlbum => dispatch(receiveAlbum(newAlbum)))
);

export const deleteAlbum = id => dispatch => (
  APIUtil.deleteAlbum(id).then(album => dispatch(removeAlbum(album)))
);
