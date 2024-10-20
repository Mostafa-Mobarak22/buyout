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
import AllModel from './componants/dashboard/AllModel'
import AllUser from './componants/dashboard/user/AllUser'
import EditUser from './componants/dashboard/user/EditUser'
import Search from './componants/searchBar/searchBar'
import NotFound from './componants/404/NotFound'
import PropertyPage from './componants/property page/PropertyPage'
import WishList from './componants/wish list/WishList'
import Pricing from './componants/pricing/Pricing'
import AllProperty from './componants/dashboard/property/AllProperty'
import EditProperty from './componants/dashboard/property/EditProperty'
import ProdectedRoute from './componants/prodected route/ProdectedRoute'
import ResetPassword from './componants/password/ResetPassword'
import ChangePassword from './componants/password/ChangePassword'
import ContactUs from './componants/ContactUs/ContactUs'
import Footer from './componants/footer/footer'
import Landing from './componants/landing/Landing'
import Navbar from './componants/navbar/Navbar'
import MyProperty from './componants/my property/MyProperty'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
      {path: "",element: <Layout/>,children:[
      {path: "",element: <Landing/>},
      {path: "login",element: <Login/>},
      {path: "signup",element: <Register/>},
      {path: "search",element: <Home/> },
      {path: "properties",element: <Home/> },
      {path: "profile/:id",element: <ProdectedRoute><Profile/></ProdectedRoute> },
      {path: "addproperty/:id",element: <ProdectedRoute><AddPropertyForm/></ProdectedRoute>},
      {path:"propertypage/:id",element: <PropertyPage/>},
      {path:"wishlist",element: <ProdectedRoute><WishList/></ProdectedRoute>},
      {path:"pricing/:id/:name",element: <ProdectedRoute><Pricing/></ProdectedRoute>},
      {path:"reset",element: <ResetPassword/>},
      {path:"save",element: <ChangePassword/>},
      {path:"contactus",element:<ContactUs/>},
      {path:"myproperty",element:<MyProperty/>},
      {path:"*",element: <NotFound/>}
    ]},
    {path:"admin",element: <ProdectedRoute><AllModel/></ProdectedRoute>,children:[
      {path: "edituser/:id", element: <ProdectedRoute><EditUser/></ProdectedRoute>},
      {path: "",element: <ProdectedRoute><AllUser/></ProdectedRoute>},
      {path: "alluser",element: <ProdectedRoute><AllUser/></ProdectedRoute>},
      {path: "allproperty",element: <ProdectedRoute><AllProperty/></ProdectedRoute>},
      {path: "editproperty/:id",element: <ProdectedRoute><EditProperty/></ProdectedRoute>},
    ]}
  ])

  return <>
  <TokenContext>
    <RouterProvider router={route}></RouterProvider>
    <ToastContainer />
  </TokenContext>
    </>
  
}

export default App