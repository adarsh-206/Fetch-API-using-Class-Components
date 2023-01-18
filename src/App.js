import React, { Component } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import IdData from './components/IdData'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/IdData' element = {<IdData/>} />
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App
