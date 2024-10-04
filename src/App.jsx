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
import AddPropertyForm from './componants/addproperty/addproperty'
import { ToastContainer } from 'react-toastify'
import Home from './componants/home/Home'
import TokenContext from './assets/context/TokenContext'
import LandingPage from './pages/landin_page/landing_page'
import Cart from './componants/cart/Cart'
import AllModel from './componants/dashboard/AllModel'
import AllUser from './componants/dashboard/user/AllUser'
import EditUser from './componants/dashboard/user/EditUser'
import Search from './componants/searchBar/searchBar'
import NotFound from './componants/404/NotFound'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
      {path: "",element: <Layout/>,children:[
      {path: "",element: <LandingPage/>},
      {path: "login",element: <Login/>},
      {path: "signup",element: <Register/>},
      {path: "home",element: <Home/>},
      {path: "profile",element: <Profile/>},
      {path: "dashboard", element: <AllModel/>},
      {path: "alluser",element: <AllUser/>},
      {path: "edituser/:id",element: <EditUser/>},
      {path: "search",element: <Search/>},
      {path:"*",element: <NotFound/>}

    ]}
  ])

  return <>
  <TokenContext>
    <RouterProvider router={route}></RouterProvider>
    <ToastContainer />
  </TokenContext>
  {/* <AllUser/> */}
  {/* <Cart/> */}
  {/* <AddPropertyForm/> */}
  {/* <Navbar/> */}
  {/* <Profile/> */}
  {/* <Loading/> */}
  {/* <Register/> */}
    </>
  
}

export default App