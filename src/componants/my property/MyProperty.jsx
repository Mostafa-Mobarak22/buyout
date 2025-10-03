import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import profile from '../../assets/profile-photo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../loading/Loading'
import area from '../../assets/area.png'
import Slider from "react-slick"
import Swal from 'sweetalert2'
import EmptyWishPage from '../wish list/emptywishlist'
export default function MyProperty() {
    const [showModal, setShowModal] = useState(false);
    const [properties,setProperties] = useState([])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    useEffect(()=>{
        getProperty()
    },[])
    async function getProperty(){
        const { data } = await axios.get("http://127.0.0.1:8000/property/user/"+localStorage.getItem("user_id")+"/")
        setProperties(data)
        console.log(data[0].user_id.image)
    }
    async function deleteProperty(id){
        const { data } = await axios.delete("http://127.0.0.1:8000/property/properties/"+id+"/")
        getProperty()
    }
    const confirm = (id)=>{
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#398378",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButton: deleteProperty(id)
            });
        }
      });
    } 
  return <>
{
    properties == false ? <EmptyWishPage title = "Property"/> : <div className='container mt-24'>
<div className='grid sm:ms-5 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-6'>
{
        properties.map((properties,index)=>{
            return <>
                    <div key={index} className="flex w-full max-w-[33rem] sm:max-w-[36rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <Link to={"/propertypage/"+properties.id}>
                        <div className="relative rounded-xl h-[220px] overflow-hidden rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-md shadow-blue-gray-500/40">
                            {
                                properties.is_sale == 'Rent' ?
                                <span  className='absolute top-2 left-2 z-10 rounded-full bg-slate-400 bg-opacity-25 pt-1 w-24 h-8 text-center font-semibold text-[#398378]' > {properties.is_sale} </span>
                                :
                                <span  className='absolute top-2 left-2 z-10 rounded-full bg-slate-400 bg-opacity-25 pt-1 w-24 h-8 text-center font-semibold text-red-700' > {properties.is_sale} </span>
                            }
                            <Slider {...settings}>
                                {
                                    properties.images.map((image,index)=>{
                                        return <img key={index} className='w-100  h-[220px]' src={"http://127.0.0.1:8000"+image} alt="ui/ux review check"/>
                                    })
                                }
                            </Slider>
                        </div>
                    </Link>
                        <div className="px-3 py-2">
                            <div className="mb-1 flex flex-col justify-between">
                                <div className='flex justify-between'>
                                    <div>
                                        <h6 className="block font-sans text-sm font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">{properties.commercial}</h6>
                                        <h2 className="block font-sans text-2xl pb-1 font-bold leading-snug tracking-normal text-black antialiased">{properties.price.toLocaleString('en-EG', { style: 'currency', currency: 'EGP' })}</h2>
                    
                                    </div>
                                    <div className='w-12'>
                                        <img src={properties.user_id.image ? "http://127.0.0.1:8000"+properties.user_id.image : profile } className='rounded-full' alt="logo" />
                                    </div>
                                </div>
                    
                                <h5 className="line-clamp-1 mb-2 font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased ">{properties.title}</h5>
                                <p className="line-clamp-1 mb-2 font-sans text-base font-light leading-relaxed text-gray-700 antialiased "><i class="fa-solid fa-location-dot me-2 text-[#31C48D]"></i>{properties.location}</p>
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-2">
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
                            </div>
                        </div>
                    
                        <div className="px-3 py-1 flex gap-1">
                        {properties.is_published ?
                            <button
                                className="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-red-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                                onClick={()=>{confirm(properties.id)}}
                            
                            >
                                Delete
                            </button> :
                            <button
                                className="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-red-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            
                            >
                                Under Review
                            </button>
                    }
                            {/* <button
                                className="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                                
                            >
                                
                            </button> */}
                            <Link className='block w-1/4' to={"/propertypage/"+properties.id}>
                                <button
                                    className="block w-full py-2 select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <i class="fa-solid fa-info"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
            
            </>
                })
                    
            
            
}
</div>
    </div>
}
{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="flex items-start justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl py-2 ps-2 font-semibold">
                    Send Your Message
                  </h3>
                  <button 
                    className="p-1 ml-auto bg-transparent border-0  text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="relative p-6 flex-auto">
                    <div className="flex gap-x-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2 w-56">
                                <input onBlur={handleBlur} onChange={handleChange} value={values.name} id="name" name="name" type="name" autoComplete="name" placeholder='Your Name' className="block focus:outline-[#398378] w-full rounded-md border-2 p-2  text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                                {touched.name && errors.name && <p className='text-red-500'>{errors.name}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2 w-56">
                                <input onBlur={handleBlur} onChange={handleChange} value={values.email} id="email" name="email" type="email" autoComplete="email" placeholder='Your Email' className="block focus:outline-[#398378] w-full rounded-md border-2 p-2  text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                                {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                            </div>
                        </div>  
                     
                    </div>
                        <div className='pt-3'>
                            <label htmlFor="massage" className="block text-sm font-medium leading-6 text-gray-900">Massage</label>
                            <div className="mt-2 w-full">
                                <textarea onBlur={handleBlur} onChange={handleChange} name='massage' value={values.massage} class="resize-none p-2 h-28 rounded-md w-100 block focus:outline-[#398378] border-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm" placeholder='Your Massage'></textarea>
                                {touched.massage && errors.massage && <p className='text-red-500'>{errors.massage}</p>}
                            </div>
                        </div>
                        {success && <p className='text-green-700 pt-3 text-center'>{success}</p>}  

                </div>
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button 
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#398378] text-white active:bg-emerald-600 hover:bg-[#31C48D] font-bold text-lg px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={() => setShowModal(false)}
                  >
                    Send
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
</>
}
