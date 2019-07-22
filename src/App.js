import React, { Component } from 'react';
import './App.css'
import TodoList from './components/TodoList';

const items = [ 
  { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <TodoList  
         items={items}
       />
      </div>
    );
  }
}

export default App;
