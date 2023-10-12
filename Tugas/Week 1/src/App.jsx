import { useState } from 'react'
import './App.css'
import KotakKiri from './component/KotakKiri'
import KotakKanan from './component/KotakKanan'
import Data from './data.json'

function App() {
  // console.log(Data);
  return (
    <>
      <div className="penerbangan">
        <div className="div">
          <KotakKiri data={Data} />
          <KotakKanan data={Data} />
        </div>
      </div>
    </>
  )
}

export default App
