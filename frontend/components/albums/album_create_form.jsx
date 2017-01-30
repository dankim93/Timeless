import React from 'react';

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user_id: this.props.currentUser.id
    };
  }

  update(prop) {
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAlbum(this.state).then(() => this.props.closeModal());
  }

  render() {

    return(
      <form className='upload-form' onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          value={this.state.title}
          placeholder='title'
          onChange={this.update('title')} />
        <button>Create Album</button>
      </form>
    );
  }

}

export default AlbumCreateForm;
