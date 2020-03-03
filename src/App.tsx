import React from 'react'
import './App.css'
import me from './assets/me.jpg'

function App() {
  return (
    <div className="App">
      <div className="App-inner">
        <div className="App-column-left">
          <h1>Hi! my name is Rob.</h1>
          <h2>
            philosophical
            <br />
            programmer who thinks too much
            <br />
            so writes poems instead
          </h2>
          <h2>vers. 37</h2>
        </div>
        <div className="App-column-right">
          <img className="me" src={me} />
        </div>
      </div>
      <div className="App-nav">
        <h2>
          Current Project: <i>philosophy</i>
        </h2>
      </div>
    </div>
  )
}

export default App
