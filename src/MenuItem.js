import React, { Component } from 'react';

class MenuItem extends Component {

  render() {
    return (
        <li className="category">
          <a href='#'>{this.props.name}</a>
        </li>
    );
  }
}

export default MenuItem;
