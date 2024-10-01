import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Register from './componants/register/Register'
import Login from './componants/login/Login'
import HeroSection from './componants/herosection/heroSection'
import Profile from './componants/profile/Profile'
import Layout from './componants/layout/Layout'
import Navbar from './componants/navbar/Navbar'
import Loading from './componants/loading/Loading'
import AddPropertyForm from './componants/addproperty/addproperty'
import Home from './componants/home/Home'
import TokenContext from './assets/context/TokenContext'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {path: "",element: <Layout/>,children:[
      {path: "",element: <LandingPage/>},
      {path: "login",element: <Login/>},
      {path: "signup",element: <Register/>},
      {path: "home",element: <Home/>},
      {path: "profile",element: <Profile/>},
    ]}
  ])

  return <>
  <TokenContext>
    <RouterProvider router={route}></RouterProvider>
  </TokenContext>
  
  {/* <AddPropertyForm/> */}
  {/* <Navbar/> */}
  {/* <Profile/> */}
  {/* <Loading/> */}
  {/* <Register/> */}
    </>
  
}

export default App