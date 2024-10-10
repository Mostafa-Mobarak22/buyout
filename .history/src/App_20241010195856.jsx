import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Register from './componants/register/Register'
import Login from './componants/login/Login'
import Profile from './componants/profile/Profile'
import Layout from './componants/layout/Layout'
import AddPropertyForm from './componants/addproperty/addproperty'
import { ToastContainer } from 'react-toastify'
import Home from './componants/home/Home'
import TokenContext from './assets/context/TokenContext'
import LandingPage from './pages/landin_page/landing_page'
import AllModel from './componants/dashboard/AllModel'
import AllUser from './componants/dashboard/user/AllUser'
import EditUser from './componants/dashboard/user/EditUser'
import Search from './componants/searchBar/searchBar'
import NotFound from './componants/404/NotFound'
import PropertyPage from './componants/property page/PropertyPage'
import WishList from './componants/wish list/WishList'
import Pricing from './componants/pricing/Pricing'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
      {path: "",element: <Layout/>,children:[
      {path: "",element: <LandingPage/>},
      {path: "login",element: <Login/>},
      {path: "signup",element: <Register/>},
      {path: "home/:id",element: <Home/>},
      {path: "profile/:id",element: <Profile/>},
      {path: "dashboard", element: <AllModel/>},
      {path: "alluser",element: <AllUser/>},
      {path: "edituser/:id",element: <EditUser/>},
      {path: "search",element: <Search/>},
      {path: "addproperty/:id",element: <AddPropertyForm/>},
      {path:"propertypage/:id",element: <PropertyPage/>},
      {path:"wishlist",element: <WishList/>},
      {path:"pricing/:id/:name",element: <Pricing/>},
      {path:"*",element: <NotFound/>}
    ]},
    {path:"admin",element: <AllModel/>,children:[}]}
  ])

  return <>
  <TokenContext>
    <RouterProvider router={route}></RouterProvider>
    <ToastContainer />
  </TokenContext>
  {/* <AllUser/> */}
  {/* <Cart/> */}
  {/* <Cart/> */}
  {/* <AddPropertyForm/> */}
  {/* <Navbar/> */}
  {/* <Profile/> */}
  {/* <Loading/> */}
  {/* <Register/> */}
    </>
  
}

export default App