import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css'
import InputTask from './components/inputTask'
import EditTask from './components/editTask'
import ListTask from './components/listTask'

class App extends React.Component {
  render (){
    return (
      <div>
        <InputTask/>
        
        <ListTask/>
      </div>
    )
  }
}

export default App;
