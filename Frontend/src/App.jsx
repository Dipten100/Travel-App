import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div className="min-vh-100">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
