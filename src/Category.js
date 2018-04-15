import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './Category.css';
import {Icon} from 'react-fa';

class Category extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.handleExpanded(event.target.id);
  }

  render() {
    return (
        <li className="category">
          <h3 onClick={this.handleClick} id={this.props.name}><Icon className="icon" name={this.props.icon} />{this.props.name}</h3>
          <ul className={this.props.name === this.props.visible ? 'visible' : 'no-visible'}>
            {this.props.items.map((item)=>{
              return <MenuItem name={item} key={item}/>
            })}
          </ul>
        </li>
    );
  }
}

export default Category;
