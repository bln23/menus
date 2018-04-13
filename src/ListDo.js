import React, { Component } from 'react';

class ListDo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {/*<span onClick={this.props.mark}>✔️</span>*/}
        <h3 className="textlist">{this.props.list}</h3>
        <span className="button-remove" onClick={this.props.remove}>❌</span>
      </div>
    );
  }
}

export default ListDo;
