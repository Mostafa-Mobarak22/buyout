import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick"
import area1 from '../../assets/profile-photo.jpg'
import area from '../../assets/area.png'
import Cart from '../cart/Cart'
import * as Yup from 'yup'
import axios from 'axios'
import {useFormik} from 'formik'
import Loading from '../loading/Loading'
export default function PropertyPage() {
    const [showModal, setShowModal] = useState(false);
    const [property, setProperty] = useState(null);
    const [sameproperty, setSameProperty] = useState(null);
    const [success, setSuccess] = useState("");
    let { handleSubmit,values,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues:{
            "name":"",
            "massage":"",
            "email":"",
        },
        onSubmit: register,
        validationSchema:Yup.object({
            name:Yup.string().required("User_Name is required").min(5,"User_Name must be more than 5 character").max(25,"Name must be less than 25 character"),
            email:Yup.string().required("email is required").email("email not correct"),
            massage:Yup.string().required("Massage is required").min(20,"User_Name must be more than 5 character").max(100,"Name must be less than 100 character"),
        })
    })
    async function register(){
        const { data } = await axios.post("http://127.0.0.1:8000/user/massage/",values)
        console.log(data)
        setSuccess(data.success_massage)
    }
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
    const {id} = useParams()
    async function getProprety(){
        const { data } = await axios.get(`http://127.0.0.1:8000/property/properties/${id}/`)
        console.log(data)
        console.log(data.commercial)
        setProperty(data)

    }
    async function sameProprety(){
        const { data } = await axios.get(`http://127.0.0.1:8000/property/properties`)

        setSameProperty(data.filter((e)=>{return e.commercial==property.commercial}))
        console.log(data.filter((e)=>{return e.commercial==property.commercial}))
    }
    useEffect(() => {
        getProprety()
        sameProprety()
    }, [])
  return <>
{!(property) ? <Loading/>:
 <div className="container pt-5">
    <div className='grid grid-cols-3 mb-10 gap-4 mx-auto'>
        <div className='col-span-3 lg:col-span-2 h-50 shadow-lg '>
            <Slider {...settings}>
                {
                    [1,1,1,1,1].map((e)=>{
                        return <img className='h-screen rounded-lg' src={property.image} alt="ui/ux review check"/>
                    })
                }
            </Slider>
        </div>
        <div className='lg:flex lg:flex-col gap-4  hidden'>
            <div className='rounded-lg'>
                <Slider {...settings} className="rounded-lg">
                    {
                        [1,1,1,1,1].map((e)=>{
                            return <img className='h-[48vh] rounded-lg' src={property.image} alt="ui/ux review check"/>
                        })
                    }
                </Slider>
            </div>
            <div className='rounded-lg'> 
                <Slider {...settings}>
                    {
                        [1,1,1,1,1].map((e)=>{
                            return <img className='h-[49vh] rounded-lg' src={property.image} alt="ui/ux review check"/>
                        })
                    }
                </Slider>
            </div>            
        </div>
    </div>
    <div className='grid grid-cols-3 mt-24 mx-auto mb-40 gap-4'>
        <div className='col-span-3  lg:col-span-2 '>
            <div className='flex md:flex-row flex-col justify-between pb-3'>
                <div>
                    <h1 className='font-extrabold text-4xl p-3'>{property.price.toLocaleString('en-EG', { style: 'currency', currency: 'EGP' })}</h1>
                </div>
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-2'>
                        <span className='grid mt-2'>
                            <i class="fa-solid fa-bed m-auto text-xl"></i>
                        </span>
                        <span>
                            <h3>{property.bed} Bedrooms</h3>
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 px-2'>
                        <span className='grid mt-2'>
                            {/* <i class="fa-solid fa-bed m-auto text-xl "></i> */}
                            <i class="fa-solid fa-bath m-auto text-xl"></i>
                        </span>
                        <span>
                            <h3>{property.bath} Bathrooms</h3>
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 mt-[-4px]'>
                        <span className='grid mt-2'>
                            {/* <i class="fa-solid fa-bed m-auto text-xl"></i> */}
                            <img src={area} className='m-auto' alt="" />
                        </span>
                        <span >
                            
                            <h3 >{property.area} Sq.M.</h3>
                        </span>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-gray-300 pt-4 mb-3'>
                <h1 className='text-2xl font-semibold text-gray-700'>{property.title}</h1>
            </div>
            <div className='pt-3 flex gap-3 pb-4'>
            
                <i class="fa-solid fa-location-dot text-xl text-[#31C48D]"></i>
                <p>{property.location}</p>
            </div>
            <div className='pb-16'>
                <p className='text-gray-700 text-lg tracking-wide leading-loose'>
                    {property.description}
                </p>
            </div>
            <div className='py-5  border-y-2 border-gray-300'>
                <h2 className='text-2xl font-bold'>Property details</h2>
                <div className='flex pt-5 flex-col md:flex-row justify-between'>
                    <div className='flex flex-col gap-5 pb-0 sm:pb-4'>
                        <div className='flex justify-between gap-24'>
                            <span className='text-xl font-semibold'>
                                <i class="fa-solid fa-building pe-2"></i>Property Type
                            </span>
                            <span className='text-xl text-gray-700'>
                                {property.commercial}
                            </span>
                        </div>       
                        <div className='flex justify-between gap-24'>
                            <span className='text-xl font-semibold flex'>
                            <img src={area} alt="" />
                                Property Size
                            </span>
                            <span className='text-xl  text-gray-700'>
                                
                                {property.area} sqm
                            </span>
                        </div>            
                    </div>
                    <div className='flex flex-col gap-5 pt-0 sm:pt-4'>
                        <div className='flex justify-between gap-24'>
                            <span className='text-xl font-semibold'>
                                <i class="fa-solid fa-bath pe-2"></i>
                                Bathrooms
                            </span>
                            <span className='text-xl text-gray-700'>
                                {property.bath}
                            </span>
                        </div>       
                        <div className='flex justify-between gap-24'>
                            <span className='text-xl font-semibold'>
                                <i class="fa-solid fa-bed pe-2"></i>
                                Bedrooms
                            </span>
                            <span className='text-xl  text-gray-700'>
                                
                                
                                {property.bed}
                            </span>
                        </div>            
                    </div>
                </div>
            </div>
            <div className='pt-10'>
            <h2 className='text-2xl font-bold'>More available in the same type</h2>
            <div className='pt-5 w-[25rem] flex-col lg:flex-row flex gap-5'>
            {
                        sameproperty?.map((property)=>{
                        
                            return  <Cart properties={property}/>
                        })
                    }
            </div>
            </div>

    </div>
        <div className='lg:flex lg:flex-col h-40 col-span-3 lg:col-span-1  rounde-lg shadow-lg sticky top-0'>
            <div className='flex align-items-center justify-around '>
                <div className='h-20 w-20 rounded-sm'>
                    <img src={area1} alt="" />
                </div>
                <h2>mostafa mobarak</h2>
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
    </div>
</div> } 
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
