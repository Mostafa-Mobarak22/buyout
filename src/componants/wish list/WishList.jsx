import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import Cart from '../cart/Cart'
import EmptyWishPage from './emptywishlist'

export default function WishList() {
    const [properties, setProperties] = useState(null)
    useEffect(()=>{
        getProperties()
    },[])
    async function getProperties(){
        const {data} = await axios.get("http://127.0.0.1:8000/user/wishlist/3/")
        console.log(data[0].data)
        setProperties(data[0].data)
    }

  return <>
  {
    !properties ? <EmptyWishPage/> :
<div className='container pt-10'>
        
<div className='grid sm:ms-5 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-4'>
    {
                        properties.map((property)=>{
                          
                            return  <Cart properties={property}/>
                        })
                    }
      {/* <Cart/> */}
    </div>
</div>
  }
  </>
}
