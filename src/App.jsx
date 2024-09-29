import { useState } from 'react'
import './App.css'
import Register from './componants/register/Register'
import Login from './componants/login/Login'
import HeroSection from './componants/herosection/heroSection'
import Navbar from './componants/navBar/navbar'
import Profile from './componants/profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return <>
      
      <Profile/>
      {/* <Login /> */}
    </>
  
}

export default App