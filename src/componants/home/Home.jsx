import React from 'react'
import Cart from '../cart/Cart'

export default function Home() {
  return <>
  <div className='container pt-24 px-16'>
    <div className='grid grid-cols-2 gap-y-4'>
    {
                        [1,1,1,1,1].map((e)=>{
                            return <Cart/>
                        })
                    }
      {/* <Cart/> */}
    </div>
    
  </div>
  
  </>
    
  
}