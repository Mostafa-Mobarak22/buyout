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
import AllProperty from './componants/dashboard/property/AllProperty'
import EditProperty from './componants/dashboard/property/EditProperty'
import ProdectedRoute from './componants/prodected route/ProdectedRoute'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
      {path: "",element: <Layout/>,children:[
      {path: "",element: <LandingPage/>},
      {path: "login",element: <Login/>},
      {path: "signup",element: <Register/>},
      {path: "home/:id",element: <ProdectedRoute><Home/></ProdectedRoute> },
      {path: "profile/:id",element: <ProdectedRoute><Profile/></ProdectedRoute> },
      {path: "search",element: <Search/>},
      {path: "addproperty/:id",element: <ProdectedRoute><AddPropertyForm/></ProdectedRoute>},
      {path:"propertypage/:id",element: <ProdectedRoute><PropertyPage/></ProdectedRoute>},
      {path:"wishlist",element: <ProdectedRoute><WishList/></ProdectedRoute>},
      {path:"pricing/:id/:name",element: <ProdectedRoute><Pricing/></ProdectedRoute>},
      {path:"*",element: <NotFound/>}
    ]},
    {path:"admin",element: <ProdectedRoute><Pricing/></ProdectedRoute><AllModel/>,children:[
      {path: "edituser/:id", element: <ProdectedRoute><EditUser/></ProdectedRoute>},
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