import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: '',
      item: '',
      opened: false
    }
    this.handleExpanded = this.handleExpanded.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleExpanded(pExpanded){
    this.setState({
      expanded: pExpanded
    })
  }

  mark = index => {
  const item = [...this.state.item]
  item.splice(index, 1)
  this.setState({ item: item})
}

handleDropDown(){
  this.setState({
    opened: !this.state.opened
  })
}

  render() {
    return (
      <div className="App">
        <ul>
            <Category name="Lenguajes" items={['HTML','CSS','JavaScript']}
              icon="angle-down"
              visible={this.state.expanded}
              handleExpanded={this.handleExpanded}/>
            <Category name="Frameworks" items={['React','Vue','Angular']}
              icon="angle-down"
              visible={this.state.expanded}
              handleExpanded={this.handleExpanded}/>
            <Category name="Estructura" items={['Div','Lista','Header','Footer']}
              icon="angle-down"
              visible={this.state.expanded}
              handleExpanded={this.handleExpanded}/>
            <Category name="Enlaces" items={['Enlace 1','Enlace 2','Enlace 3']}
              icon="angle-down"
              visible={this.state.expanded}
              handleExpanded={this.handleExpanded}/>
        </ul>
        <div className="buttons">
        <button onClick={this.handleDropDown} className="buttonDropDown">COMPONENTS
        </button>
          <button onClick={this.handleDropDown} className="buttonDropDown icon">{this.state.opened ? '\u25B2' : '\u25BC'}</button>

          <div className="options">
            {this.state.opened &&
            <ul>
              <li className="option">option 1</li>
              <li className="option">option 2</li>
              <li className="option">option 3</li>
            </ul>
          }
          </div>
          </div>

      </div>
    )
  }
}

export default App;
