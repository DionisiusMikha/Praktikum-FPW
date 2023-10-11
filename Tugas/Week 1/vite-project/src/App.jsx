import { useState } from 'react'
import './App.css'
import CardItem from './component/CardItem'

function App() { 

  return (
    <>
    <div className="slide">
          <div className="div">
            <div className="frame">
              <div className="frame-wrapper">
                <div className="frame-2">
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                </div>
              </div>
              <div className="text-wrapper">List Penerbangan</div>
            </div>
            <div className="rectangle" > 
              <div className="text-wrapper">List Penerbangan</div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
