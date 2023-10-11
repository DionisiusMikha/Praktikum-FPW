import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'

function App() {
  const [isHome, setIsHome] = useState(true)

  const handleNavbarClick = (page) => {
    page == 'home' ? setIsHome(true) : setIsHome(false)
  }

  return (
    <div className='w-screen h-screen'>
      <div className="header w-full h-16 bg-blue-900 flex">
        <div className="text-lg text-white m-auto x-3">
          <span className='mr-5 cursor-pointer' onClick={ () => {setIsHome(true)} }>Home</span>
          <span className='cursor-pointer' onClick={ () => handleNavbarClick('second') }>Second</span>
        </div>
      </div>
      <div className="content">
        {
          isHome && <HomePage />
        }
        {
          !isHome && <SecondPage />
        }
      </div>
    </div>
  )
}

export default App
