import React from 'react';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import Nav from './components/Nav'

const App = () => (
  <div className="App">
    <Nav/>
    <Addtask/>
    <ListTask/>
  </div>
)

export default App
