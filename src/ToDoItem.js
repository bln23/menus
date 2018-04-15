import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {/*<span onClick={this.props.mark}>✔️</span>*/}
        <h3 className="textlist">{this.props.itemList}</h3>
        <span className="button-remove" onClick={this.props.remove}>❌</span>
      </div>
    );
  }
}

export default ToDoItem;
