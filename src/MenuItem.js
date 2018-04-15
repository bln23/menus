import React, { Component } from 'react';
import {Icon} from 'react-fa';

class MenuItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
     this.setState({
       checked: !this.state.checked
     });
  }

  render() {
    const checkIcon = this.state.checked ? (<Icon name="check"/>) : '';
    return (
        <li onClick={this.handleClick} className="category">
          <a href='#'>
            {this.props.name}
            {checkIcon}
        </a>
      </li>
    );
  }
}

export default MenuItem;
