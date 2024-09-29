import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Register from './componants/register/Register'
import Login from './componants/login/Login'
import HeroSection from './componants/herosection/heroSection'
import Profile from './componants/profile/Profile'
import Layout from './componants/layout/Layout'
import Navbar from './componants/navbar/Navbar'
import Loading from './componants/loading/Loading'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {path: "",element: <Layout/>,children:[
      {path: "login",element: <Login/>},
      {path: "signup",element: <Register/>}
    ]}
  ])

  return <>
  <RouterProvider router={route}></RouterProvider>
  {/* <Navbar/> */}
  {/* <Profile/> */}
  {/* <Loading/> */}
  {/* <Register/> */}
    </>
  
}

export default App