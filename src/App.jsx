import Navbar from './components/navbar.jsx'
import SideBar from './components/SideBar.jsx'
import TaxPage from './components/TaxPage.jsx'

function App() {


  return (
    <>
    <div className='flex bg-gray-100'>

        <SideBar />
      <div className=" h-full w-full">
        <Navbar />
        <TaxPage />
      </div> 
    </div>

    
    </>
  )
}

export default App
