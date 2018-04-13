import React, { Component } from 'react';

class ListDo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <span onClick={this.props.remove}>❌</span>
        <span onClick={this.props.mark}>✔️</span>
        <h3>{this.props.list}</h3>
      </div>
    );
  }
}

export default ListDo;
