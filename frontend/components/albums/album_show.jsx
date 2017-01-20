import React from 'react';
import PhotosItem from '../profile/photos_item';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {

    const filterAlbum = id => {
      let answer = '';
      for(let i = 0; i < this.props.albums.length; i++) {
        if (this.props.albums[i].id === id){
          answer = this.props.albums[i];
        }
      }

      return answer;
    };

    const displayAlbum = filterAlbum(this.props.albumId).photos.map(photo => <PhotosItem key={photo.id} photo={photo} />);
    return (
    <ul>
      { displayAlbum }
    </ul>
    );
  }
}

export default AlbumShow;
