import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'/
import Navbar from './components/navbar.jsx'
import SideBar from './components/SideBar.jsx'
import TaxPage from './components/TaxPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex'>

        <SideBar />
      <div className=" h-screen w-full">
        <Navbar />
        <TaxPage />
      </div> 
    </div>

    
    </>
  )
}

export default App
