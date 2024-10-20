import React from 'react';
import * as Yup from 'yup'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import Slider from "react-slick"
import { toast, Bounce, ToastContainer } from 'react-toastify'
import {useFormik} from 'formik'
import { useParams } from 'react-router-dom';
import Loading from '../../loading/Loading';
const EditProperty = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    const [profileData , setProfileData] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        getProperty()
        
    },[])
    async function getProperty() {
        try {
            await axios.get("http://127.0.0.1:8000/property/properties/"+id+"/", {
            }).then((data)=>{
                setProfileData(data.data);
                console.log(data.data.image);
                setIsLoading(false)
            })
        } catch (error) {
            setIsLoading(true)
            console.error("Error fetching profile data", error);
        }
    }
    const [allgover ,setAllgover] = useState([
        'Cairo', 
        'Alexandria', 
        'Giza',
        'Qalyubia', 
        'Dakahlia', 
        'Sharqia', 
        'Gharbia', 
        'Monufia', 
        'Kafr El Sheikh', 
        'Damietta', 
        'Port Said', 
        'Ismailia', 
        'Suez',
        'Aswan', 
        'Luxor', 
        'Red Sea', 
        'Matrouh', 
        'North Sinai', 
        'South Sinai', 
        'Faiyum',
        'Beni Suef', 
        'Minya', 
        'Assiut',
        'Sohag', 
        'Qena',
        'New Valley',
        'Damietta'
    ])
    const [typeProperty,setTypeProperty] = useState([
        'Office',
        'Retail',
        'Restaurant', 
        'Pharmacy', 
        'Clinic',
        'Commercial Building',
        'Commercial Land', 
        'Agricultural', 
        'Warehouse', 
        'Garage',
        'Other Commercial', 
    
            
    ])
    let { handleSubmit,values,handleChange,errors,touched,handleBlur,setValues} = useFormik({
        initialValues:{
            "title":profileData?.title,
            "description":profileData?.description,
            "property_type":profileData?.property_type,
            "price":profileData?.price,
            "bed":profileData?.bed,
            "bath":profileData?.bath,
            "governorate":profileData?.governorate,
            "city":profileData?.city,
            "country":profileData?.country,
            "street":profileData?.street,
            "area":profileData?.area,
            // "image":profileData?.image,
            "commercial":profileData?.commercial,
            "location":profileData?.location,
            "user_id":profileData?.user_id,
            "listed_date":profileData?.listed_date
        },
        enableReinitialize: true,
        onSubmit: editProperty,
        validationSchema:Yup.object({
            // title:Yup.string().required("title is required").min(5,"title must be more than 5 character").max(100,"title must be less than 100 character"),
            // location:Yup.string().required("Should write Location Your Property" ).min(10,"location must be more than 10 character").max(150,"location must be less than 150 character"),
            // description:Yup.string().required("Should write  for Your Property" ),
            // property_type:Yup.string().required("Choose usage of Property"),
            // bed:Yup.number().test("maxDigits","bed field must have exactly 1 digits",(bed) => String(bed).length === 1),
            // bath:Yup.number().test("maxDigits","bath field must have exactly 1 digits",(bath) => String(bath).length === 1),
            // price:Yup.number().required("Enter the property price" ).test("maxDigits","price field must have exactly 10 digits",(price) => String(price).length <= 10),
            // governorate:Yup.string().required("Choose Governorate  of Your Property" ),
            // area:Yup.number().required("Enter the property area" ).test("maxDigits","area field must have exactly 7 digits",(area) => String(area).length <= 7),
            // commercial:Yup.string().required("Choose Type of Property"),
            // city:Yup.string().required("Enter City  of Your Property" ).min(4,"city must be more than 4 character"),
            // street:Yup.string().required("Enter street of Your Property" ).min(5,"street must be more than 5 character"),
        })
    })
    async function editProperty(){
        console.log(values)
        // console.log(typeof document.getElementById("image").files)
        // values.image = document.getElementById("image").files[0]
        // console.log(document.getElementById("image").files[0])
        let { data } = await axios.patch("http://127.0.0.1:8000/property/properties/"+id+"/",values, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(data) 
              
    }

    return <>
    {!profileData ? <Loading/> :
<div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[46rem]">
        <form className="space-y-6" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="title" value={values.title} name="title" type="text" autoComplete="title" placeholder='Title' className="block focus:outline-[#398378] w-full bg-white rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.title && errors.title && <p className='text-red-500'>{errors.title}</p>}
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2 mt-3">
                    <div className='flex-auto'>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div className="mt-1">
                            <input onBlur={handleBlur} onChange={handleChange} id="price" value={values.price} name="price" type="number" autoComplete="price" placeholder="Price" className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950  font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/>
                            {touched.price && errors.price && <p className='text-red-500'>{errors.price}</p>}
                        </div>
                    </div>
                    <div className='flex-auto'>
                        <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">Area</label>
                        <div className="mt-1">
                            <input onBlur={handleBlur} onChange={handleChange} id="area" value={values.area} name="area" type="number" autoComplete="area" placeholder='Area' className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                            {touched.area && errors.area && <p className='text-red-500'>{errors.area}</p>}
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2 mt-3">
                    <div className='flex-auto'>
                        <label htmlFor="property_type" className="block text-sm font-medium leading-6 text-gray-900">Property Usage</label>
                        <div className="mt-1">
                            <select id="property_type" onBlur={handleBlur} onChange={handleChange} name='property_type' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                    <option >Residential</option>
                                    <option >Commercial</option>
                            </select>
                            {touched.property_type && errors.property_type && <p className='text-red-500'>{errors.property_type}</p>}
                        </div>
                    </div>
                    <div className='flex-auto'>
                        <label htmlFor="commercial"  className="block text-sm font-medium leading-6 text-gray-900">Property Type</label>
                        <div className="mt-1">
                            <select  id="commercial" onBlur={handleBlur} onChange={handleChange}  name='commercial' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                            {
                                        typeProperty.map((name,id)=>{
                                            return <option key={id}>{name}</option>
                                        })
                                    }
                            </select>
                            {touched.commercial && errors.commercial && <p className='text-red-500'>{errors.commercial}</p>}
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2 mt-3">
                    <div className='flex-auto '>
                        <label htmlFor="governorate" className="block text-sm font-medium leading-6 text-gray-900">Governorate</label>
                        <div className="mt-1">
                            <select id="governorate" onBlur={handleBlur} onChange={handleChange} name='governorate' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                    {
                                        allgover.map((name,id)=>{
                                            return <option key={id}>{name}</option>
                                        })
                                    }
                            </select>
                            {touched.governorate && errors.governorate && <p className='text-red-500'>{errors.governorate}</p>}
                        </div>
                    </div>
                    <div className='flex-auto '>
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">country</label>
                        <div className="mt-1">
                            <select id="country" onBlur={handleBlur} onChange={handleChange} name='country' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                <option >Egypt</option>
                            </select>
                            {touched.country && errors.country && <p className='text-red-500'>{errors.country}</p>}
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2 mt-3">
                    <div className='flex-auto'>
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div className="mt-1">
                            <input onBlur={handleBlur} onChange={handleChange} id="city" value={values.city} name='city'  type="text" autoComplete="city" placeholder='City' className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/>
                            {touched.city && errors.city && <p className='text-red-500'>{errors.city}</p>}
                        </div>
                    </div>
                    <div className='flex-auto'>
                        <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">Street</label>
                        <div className="mt-1">
                            <input onBlur={handleBlur} onChange={handleChange} id="street" name='street' value={values.street}  type="text" autoComplete="street" placeholder='Street' className="block w-full focus:outline-[#398378] bg-white rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                            {touched.street && errors.street && <p className='text-red-500'>{errors.street}</p>}
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-2 mt-3">
                    <div className='flex-auto'>
                        <label htmlFor="bed" className="block text-sm font-medium leading-6 text-gray-900">Bed</label>
                        <div className="mt-1">
                            <input onBlur={handleBlur} onChange={handleChange} id="bed" value={values.bed} name="bed" type="number" autoComplete="bed" placeholder="Bed" className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/>
                            {touched.bed && errors.bed && <p className='text-red-500'>{errors.bed}</p>}
                        </div>
                    </div>
                    <div className='flex-auto'>
                        <label htmlFor="bath" className="block text-sm font-medium leading-6 text-gray-900">bath</label>
                        <div className="mt-1">
                            <input onBlur={handleBlur} onChange={handleChange} id="bath" value={values.bath} name="bath" type="number" autoComplete="bath" placeholder='Bath' className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                            {touched.bath && errors.bath && <p className='text-red-500'>{errors.bath}</p>}
                        </div>
                    </div>
                </div>
                <label htmlFor="location" className="block mt-3 text-sm font-medium leading-6 text-gray-900">Location</label>
                <div className="mt-1">
                    <input onBlur={handleBlur} onChange={handleChange} id="location" value={values.location} name="location" type="text" autoComplete="location" placeholder='Location' className="block focus:outline-[#398378] w-full bg-white rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.location && errors.location && <p className='text-red-500'>{errors.location}</p>}
                </div>
                <div className='mt-3'>
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">description</label>
                    <div className="mt-1 w-full">
                        <textarea onBlur={handleBlur} onChange={handleChange} name='description' value={values.description} class="resize-none p-2 h-28 rounded-md w-100 block focus:outline-[#398378] border-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm" placeholder='Your description'></textarea>
                        {touched.description && errors.description && <p className='text-red-500'>{errors.description}</p>}
                    </div>
                </div>
                            
                <div className='mb-5'>
                    <label for="image" class="block text-sm mt-3 mb-5 font-medium leading-6 text-gray-900">Image</label>
                    <Slider {...settings}>
                        {
                            [1,1,1,1,1].map((e)=>{
                                return <img className='w-100' src={profileData?.image} alt="ui/ux review check"/>
                            })
                        }
                    </Slider>
                </div>
                <span className="block text-sm text-center font-medium leading-6 pt-4 pb-1 text-gray-900">Published</span>
                <div class="grid mb-5 grid-cols-2 w-1/4 mx-auto gap-2 rounded-xl bg-gray-200 ">
                    
                    <div>
                        <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_published" id="published"   value={true} class="peer hidden"/>
                        <label for="published" class="block text-sm cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#398378] peer-checked:font-bold peer-checked:text-white">Yes</label>
                    </div>

                    <div>
                        
                        <input type="radio"  onBlur={handleBlur} onChange={handleChange} name="is_published" id="not-published"  value={false}  class="peer hidden"/>
                        <label for="not-published" class="block cursor-pointer text-sm pe-3 select-none rounded-xl p-2 text-center peer-checked:bg-red-700 ps-3 peer-checked:font-bold peer-checked:text-white">No</label>
                        {profileData.is_published ? <h1>true</h1> : <h1>false</h1>}
                    </div>
                </div>                
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
</div>
}
    </>
}

export default EditProperty;

