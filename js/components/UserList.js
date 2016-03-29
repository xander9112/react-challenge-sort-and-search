import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: this.props.data,
      list: []
    }
  }

  render () {
    let list = [];

    this.props.data.forEach((user) => {
      user.imageSrc = `/images/${user.image}.svg`;

      list.push(<UserData data={user} initActiveUser={this.props.initActiveUser} key={user.id}  />);
    });

    return (
      <div className="searchbar form-group">
        <table className="user-list table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}
