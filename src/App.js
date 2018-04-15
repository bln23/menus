import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';
import ToDoItem from './ToDoItem.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: '',
      listToDo: null,
      item: []
    }
    this.handleExpanded = this.handleExpanded.bind(this);
  }

  handleExpanded(pExpanded){
    this.setState({
      expanded: pExpanded
    })
  }

  addText = event => {
    this.setState({
      list: event.target.value

    })
  }

  sendToDo = () => {
    this.setState( prevState => { return {
      item: [...prevState.item, prevState.list],
      list: ''
    }})
  }

  remove = index => {
    const item = [...this.state.item]
    item.splice(index, 1)
    this.setState({ item: item})
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
        <div className="Form">
          <input value={this.state.list} onChange={this.addText} type="text"/>
          <button className="button-add" onClick={this.sendToDo}>Add</button>
        </div>
        <ul className="list">
          {this.state.item.map((itemList, index) => <ToDoItem key={index} itemList={itemList}
            remove={()=>{this.remove(index)}}/>
          )}
        </ul>
      </div>
    )
  }
}

export default App;
