import React, { Children, useContext } from 'react'
import { tokenContext } from '../../assets/context/TokenContext'
import { Navigate } from 'react-router-dom'

export default function ProdectedRoute({children}) {
  return <>
  {
    token ? children : <Navigate to={"/login"}/>
  }
  
  </>
}
