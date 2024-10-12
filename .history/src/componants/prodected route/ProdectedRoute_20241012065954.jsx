import React, { Children, useContext } from 'react'
import { tokenContext } from '../../assets/context/TokenContext'

export default function ProdectedRoute({children}) {
    const {token} = useContext(tokenContext)
  return <>
  {
    token ? children : <
  }
  
  </>
}
