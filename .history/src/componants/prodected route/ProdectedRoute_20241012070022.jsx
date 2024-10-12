import React, { Children, useContext } from 'react'
import { tokenContext } from '../../assets/context/TokenContext'
import { Navigate } from 'react-router-dom'

export default function ProdectedRoute({children}) {
    const {token} = useContext(tokenContext)
  return <>
  {
    token ? children : <Navigate/>
  }
  
  </>
}
