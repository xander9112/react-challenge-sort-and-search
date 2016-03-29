import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      searchValue: ''
    }
  }

  changeSearchBar (e) {
    const searchValue = e.target.value;
    this.setState({searchValue});
    this.props.filterItems(searchValue);
  }

  render () {
    return (
      <div className='col-xs-12'>
        <div className="searchbar form-group">
          <input value={this.state.searchValue} type="text" className="form-control" placeholder="Search people by name..." onChange={this.changeSearchBar.bind(this)} />
        </div>
      </div>
    );
  }
}
