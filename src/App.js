import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: '',
      opened: ''
    }
    this.handleExpanded = this.handleExpanded.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleExpanded(expandedCategory){
    this.setState({
      expanded: expandedCategory === this.state.expanded ? '' : expandedCategory
    })
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
              visible={this.state.expanded === 'Lenguajes'}
              handleExpanded={this.handleExpanded}/>
            <Category name="Frameworks" items={['React','Vue','Angular']}
              icon="angle-down"
              visible={this.state.expanded  === 'Frameworks'}
              handleExpanded={this.handleExpanded}/>
            <Category name="Estructura" items={['div','ul','header','footer']}
              icon="angle-down"
              visible={this.state.expanded  === 'Estructura'}
              handleExpanded={this.handleExpanded}/>
            <Category name="Enlaces" items={['Enlace 1','Enlace 2','Enlace 3']}
              icon="angle-down"
              visible={this.state.expanded  === 'Enlaces'}
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
