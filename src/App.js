import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: ''
    }
    this.handleExpanded = this.handleExpanded.bind(this);
  }

  handleExpanded(pExpanded){
    this.setState({
      expanded: pExpanded
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
      </div>
    );
  }
}

export default App;
