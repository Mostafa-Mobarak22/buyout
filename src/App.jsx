import { useState } from 'react'
import './App.css'
import Register from './componants/register/Register'
import Login from './componants/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return <>
      <Register />
      {/* <Login/> */}
    </>
  
}

export default App
