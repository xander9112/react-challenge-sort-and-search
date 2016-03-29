import React, { Component } from 'react';


export default class Toolbar extends Component {
  sortByName () {
    this.props.sortBy('name');
  }

  sortByAge () {
    this.props.sortBy('age');
  }

  render () {
    return (
      <div className="col-sm-12">
        <div className="toolbar">
          <button onClick={this.sortByName.bind(this)} className="btn btn-default">
            <i className="icon fa fa-sort-alpha-asc"></i>
            <span>  Sort by name</span>
          </button>
          <button onClick={this.sortByAge.bind(this)} className="btn btn-default">
            <i className="icon fa fa-sort-numeric-desc"></i>
            <span>  Sort by age</span>
          </button>
        </div>
      </div>
    );
  }
}


export default Toolbar;
