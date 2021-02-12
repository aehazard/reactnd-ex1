import React, { Component } from 'react';

class ProfileList extends Component {
  render() {
    return(
    <ol>
    {this.props.profiles.map(profile =>
      <li key={profile.id}>
        <p>{this.props.users[profile.userID].name}</p>
        <p>{this.props.movies[profile.favoriteMovieID].name}</p>
      </li>
      )}
    </ol>
    )
  }
}

export default ProfileList