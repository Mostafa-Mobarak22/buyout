import { Children, createContext, useEffect, useState } from "react";
import React from 'react'




export const tokenContext = createContext()



export default function TokenContext({children}) {
    const [token,setToken ]=useState('')
    useEffect(()=>{
        if(!localStorage.getItem("user_token")){
            console.log(token)
            localStorage.setItem("user_token",token)
            console.log(localStorage.getItem("user_token")==false)
        }
    },[])

  return <tokenContext.Provider value={{token,setToken}}>
    {children}
  </tokenContext.Provider>
}
