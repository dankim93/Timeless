import React from 'react';
import AlbumsItem from './albums_item';

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const filterAlbums = id => {
      let result = [];
      this.props.albums.map(album => {
        if (album.user_id == id) {
          result.push(album);
        }
      });

      return result;
    };

    const albumList = filterAlbums(this.props.userId).map(album => (
      <AlbumsItem key={album.id} album={album} props={this.props} user={this.props.user.id}/>
    ));
    return(
      <ul className='album-list'>
        {albumList}
      </ul>
    );
  }

}

export default Albums;
