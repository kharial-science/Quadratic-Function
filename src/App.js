import React, { Component } from 'react'

import './App.css'

import Header from './Header/Header'
import Lesson from './Lesson/Lesson'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="App">
        <Header />
        <Lesson />
      </div>
    )
  }
}

export default App
