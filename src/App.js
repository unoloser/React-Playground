import React, { Component } from 'react';
import './App.css';
import Main from './components/MainContainer'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { dishes: DISHES };
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
