import React, { Component } from 'react';
import {Icon} from 'react-fa';

class MenuItem extends Component {

  render() {
    return (
        <li className="category">
          <a onClick={this.props.handleClick} href='#'>{this.props.name}
            <span icon="check"></span></a>
        </li>
    );
  }
}

export default MenuItem;
