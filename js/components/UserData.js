import React, { Component } from 'react';

export default class UserData extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: this.props.data
    }
  }

  initActiveUser(e) {
    this.props.initActiveUser(this.state.user);
  }

  render () {
    return (
      <tr onClick={this.initActiveUser.bind(this)}>
        <td>
          <img src={this.state.user.imageSrc} className="user-image" />
        </td>
        <td>{this.state.user.name}</td>
        <td>{this.state.user.age}</td>
        <td>
          <span>{this.state.user.id}</span>
          <span>{this.state.user.phone}</span>
        </td>
      </tr>
    );
  }
}
