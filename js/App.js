import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.sortedByName = true;
    this.sortedByAge = true;

    this.state = {
      users: [],
      data: [],
      activeUser: {}
    }

    this.serverRequest = $.get('/data.json', function (result) {
      this.setState({
        data: result,
        users: result
      });

      this.initActiveUser(result[0]);
    }.bind(this));
  }

  initActiveUser (activeUser) {
    this.setState({activeUser});
  }

  filterItems (value) {
    value = value.toLowerCase();
    
    let data = _.filter(this.state.users, function(user) {
        return user.name.toLowerCase().indexOf(value) + 1;
    });

    this.setState({
      data: data,
      activeUser: data[0]
    });
  }

  sortBy (value) {
    let data = _.sortBy(this.state.users, function(user) {return user[value]});

    if (value === 'age') {
      if (this.sortedByAge) {
        this.sortedByAge = false;
      } else {
        this.sortedByAge = true;
        data.reverse();
      }
    } else {
      if (this.sortedByName) {
        this.sortedByName = false;
      } else {
        this.sortedByName = true;
        data.reverse();
      }
    }

    this.setState({
      data: data,
      activeUser: data[0]
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SearchBar filterItems={this.filterItems.bind(this)}></SearchBar>
        </div>
        <div className="row">
          <Toolbar sortBy={this.sortBy.bind(this)}></Toolbar>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser user={this.state.activeUser} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList data={this.state.data} initActiveUser={this.initActiveUser.bind(this)}  activeUser={this.state.activeUser} />
          </div>
        </div>
      </div>
    );
  }
}
