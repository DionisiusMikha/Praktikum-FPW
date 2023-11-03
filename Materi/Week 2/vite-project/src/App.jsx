import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {

  return (
    <>
    <div className="game">
      <h1>Avoid 100</h1>
      <div className="point">
        <p>score : 0</p>
        <button>reset</button>
      </div>
      <div className="kotak">
        <Card />
      </div>
    </div>
    </>
  )
}

export default App
