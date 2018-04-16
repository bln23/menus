import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './Category.css';
import {Icon} from 'react-fa';

class Category extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleExpanded(this.props.name);
  }

  render() {
    return (
        <li className="category">
          <button onClick={this.handleClick} id={this.props.name}>{this.props.name}
            <Icon className="icon" name={this.props.icon}/></button>

          <ul className={this.props.visible ? 'visible' : 'no-visible'}>
            {this.props.items.map((item)=>{
              return <MenuItem name={item} key={item}/>
            })}
          </ul>
        </li>
    );
  }
}

export default Category;
