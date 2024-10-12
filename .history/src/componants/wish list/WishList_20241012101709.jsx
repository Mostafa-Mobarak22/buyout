import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import Cart from '../cart/Cart'
import EmptyWishPage from './emptywishlist'

export default function WishList() {

    const [properties, setProperties] = useState([])
    useEffect(()=>{
        getProperties()
        console.log(properties==false)
    },[])
    async function getProperties(){
        const {data} = await axios.get("http://127.0.0.1:8000/user/wishlist/"+localStorage.getItem("user_id")+"/")
        console.log(data[0].data)
        setProperties(data[0].data)
    }

  return <>
  {
    
    !properties  ? <EmptyWishPage/> :
<div className='container pt-10'>
        
<div className='grid sm:ms-5 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-4'>
    {
                        properties.map((property)=>{
                          
                            // return  <Cart properties={property} getProperties={getProperties()}/>
                            return <>
                            <div className="flex w-full max-w-[33rem] sm:max-w-[36rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
<Link to={"/propertypage/"+properties.id}>
    <div className="rounded-xl overflow-hidden rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-md shadow-blue-gray-500/40">
        <Slider {...settings}>
            {
                [1,1,1,1,1].map((e)=>{
                    return <img className='w-100 h-[300px]' src={properties.image.includes("http://127.0.0.1:8000")?properties.image:"http://127.0.0.1:8000"+properties.image} alt="ui/ux review check"/>
                })
            }
        </Slider>
    </div>
</Link>
    <div className="p-6">
        <div className="mb-1 flex flex-col justify-between">
            <div className='flex justify-between'>
                <div>
                    <h6 className="block font-sans text-sm font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">{properties.commercial}</h6>
                    <h2 className="block font-sans text-2xl pb-3 font-bold leading-snug tracking-normal text-black antialiased">EGP {properties.price}</h2>

                </div>
                <div className='w-1/5'>
                    <img src={"http://127.0.0.1:8000"+properties.user_id} className='' alt="logo" />
                </div>
            </div>

            <h5 className="line-clamp-1 mb-2 font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased ">{properties.title}</h5>
            <p className="line-clamp-1 mb-2 font-sans text-base font-light leading-relaxed text-gray-700 antialiased  mt-1"><i class="fa-solid fa-location-dot me-2 text-[#31C48D]"></i>{properties.location}</p>
        </div>
        <p className="line-clamp-1  font-sans text-base font-light leading-relaxed text-gray-700 antialiased ">{properties.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
            <span
                data-tooltip-target="money"
                className="pe-1 text-sm text-black transition-colors"
            >
                <i class="fa-solid fa-bed pe-2"></i>
                {properties.bed}
            </span>
            <span
                data-tooltip-target="money"
                className="pe-1 text-sm text-black transition-colors"
            >
                <i class="fa-solid fa-bath pe-2"></i>
                {properties.bath}
            </span>
            <span
                data-tooltip-target="money"
                className="pe-1 text-sm text-black transition-colors"
            >
                
                <img src={area} className='inline pe-2' alt="" />

                {properties.area} Sq.M. 
            </span>
            
            <span className="grow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    onClick={(e)=>{
                        e.currentTarget.classList.toggle("text-red-500");
                        if(localStorage.getItem("user_id")){
                            console.log(flag)
                            addToWishList(properties.id,(localStorage.getItem("user_id")),flag);
                            setflag(!flag);
                            console.log(flag)
                            // getProperties
                        }
                        else{
                            navigate("/login")
                        }
                    }}
                    className="h-8 w-8 ms-auto   cursor-pointer"
                    >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
            </span>            
        </div>
    </div>

    <div className="p-3 pt-3 flex gap-1">
        <button
            className="block w-full select-none rounded-lg bg-[#398378] py-1 text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={() => setShowModal(true)}
        >
            <i className="fa-solid fa-envelope"></i>
        </button>
        <button
            className="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            <i class="fa-solid fa-info"></i>
        </button>
        <button
            className="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            
        >
            <a href="https://api.whatsapp.com/send/?phone=201093059405&text=Hi%2C+I+am+interested+in+your+property+on+Bayut.+Link%3A+https%3A%2F%2Fwww.bayut.eg%2Fen%2Fpm%2F501092421%2F99e8c190-a0fa-40c3-bc30-d188436d5cf7&type=phone_number&app_absent=0" target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
        </button>
    </div>
</div>
                            
                            </>
                        })
                    }
    </div>
</div>

  }
  </>
}
