import React from 'react';
import * as Yup from 'yup'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import { toast, Bounce, ToastContainer } from 'react-toastify'
import {useFormik} from 'formik'
import { useParams } from 'react-router-dom';
const AddPropertyForm = () => {
    const {id} = useParams()
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
            "title":"",
            "description":"",
            "property_type":"Residential",
            "price":"",
            "bed":"",
            "bath":"",
            "governorate":"Cairo",
            "city":"",
            "country":"Egypt",
            "street":"",
            "area":"",
            "image":"",
            // "is_sale":"",
            "commercial":"Retail",
            "location":"",
            "user_id":id
        },
        enableReinitialize: true,
        onSubmit: addProperty,
        validationSchema:Yup.object({
            title:Yup.string().required("title is required").min(5,"title must be more than 5 character").max(100,"title must be less than 100 character"),
            location:Yup.string().required("Should write Location Your Property" ).min(10,"location must be more than 10 character").max(150,"location must be less than 150 character"),
            description:Yup.string().required("Should write  for Your Property" ),
            property_type:Yup.string().required("Choose usage of Property"),
            
            bed:Yup.number().test("maxDigits","bed field must have exactly 1 digits",(bed) => String(bed).length === 1),
            bath:Yup.number().test("maxDigits","bath field must have exactly 1 digits",(bath) => String(bath).length === 1),
            price:Yup.number().required("Enter the property price" ).test("maxDigits","price field must have exactly 10 digits",(price) => String(price).length <= 10),
            governorate:Yup.string().required("Choose Governorate  of Your Property" ),
            area:Yup.number().required("Enter the property area" ).test("maxDigits","area field must have exactly 7 digits",(area) => String(area).length <= 7),
            commercial:Yup.string().required("Choose Type of Property"),
            city:Yup.string().required("Enter City  of Your Property" ).min(4,"city must be more than 4 character"),
            street:Yup.string().required("Enter street of Your Property" ).min(5,"street must be more than 5 character"),
            // image: Yup.mixed().required("uploade image for your property more than 4 images").test('fileFormat', 'Only image files are allowed', value => {
            //     if (values.image) {
            //         const supportedFormats = ['png','jpg','jpeg','gif','webp'];
            //             return supportedFormats.includes(values.image.split('.').pop());
            //     }
            //     return true;
            // }),
        })
    })
    async function addProperty(){
        values.image = document.getElementById("image").files
        console.log(values.image)
        let { data } = await axios.post("http://127.0.0.1:8000/property/properties/",values, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(data)
        // console.log(data)
    }
    // async function editProfile(){
    //     values.image = document.getElementById("image").files[0]
    //     values.register_photo = document.getElementById("register_photo").files[0]
    //     let {data} = await axios.patch("http://127.0.0.1:8000/user/1/",values, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });
        
    //     getProfile()
    //     toast.success('Your Account Updated', {
    //         position: "bottom-center",
    //         autoClose: 2500,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //         });
    // }
    return <>
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={crat2} alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update your profile</h2>
    </div> */}
    {/* <div className="w-20 h-20 rounded-full mx-auto hover:bg-[#31C48D] shadow-lg">
        <img className='w-100 rounded-full' alt="Navbar component" src="" />
    </div> */}

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="title" value={values.title} name="title" type="text" autoComplete="title" placeholder='Title' className="block focus:outline-[#398378] w-full bg-white rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.title && errors.title && <p className='text-red-500'>{errors.title}</p>}
                </div>
                <div className="flex gap-x-2 mt-3">
                    <div className='flex-auto'>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div className="mt-1">
                            <input onBlur={handleBlur} onChange={handleChange} id="price" value={values.price} name="price" type="number" autoComplete="price" placeholder="Price" className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/>
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
                <div className="flex gap-x-2 mt-3">
                    <div className='flex-auto w-1/2'>
                        <label htmlFor="property_type" className="block text-sm font-medium leading-6 text-gray-900">Property Usage</label>
                        <div className="mt-1">
                            <select id="property_type" onBlur={handleBlur} onChange={handleChange} name='property_type' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                    <option >Residential</option>
                                    <option >Commercial</option>
                            </select>
                            {/* <input onBlur={handleBlur} onChange={handleChange} id="property_type" value={values.property_type} name="property_type" type="number" autoComplete="property_type" placeholder="property_type" className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/> */}
                            {touched.property_type && errors.property_type && <p className='text-red-500'>{errors.property_type}</p>}
                        </div>
                    </div>
                    <div className='flex-auto w-1/2'>
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
                <div className="flex gap-x-2 mt-3">
                    <div className='flex-auto w-1/2'>
                        <label htmlFor="governorate" className="block text-sm font-medium leading-6 text-gray-900">Governorate</label>
                        <div className="mt-1">
                            <select id="governorate" onBlur={handleBlur} onChange={handleChange} name='governorate' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                    {
                                        allgover.map((name,id)=>{
                                            return <option key={id}>{name}</option>
                                        })
                                    }
                            </select>
                            {/* <input onBlur={handleBlur} onChange={handleChange} id="governorate" value={values.governorate} name="governorate" type="number" autoComplete="governorate" placeholder="governorate" className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/> */}
                            {touched.governorate && errors.governorate && <p className='text-red-500'>{errors.governorate}</p>}
                        </div>
                    </div>
                    <div className='flex-auto w-1/2'>
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">country</label>
                        <div className="mt-1">
                            <select id="country" onBlur={handleBlur} onChange={handleChange} name='country' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                <option >Egypt</option>
                            </select>
                            {/* <input onBlur={handleBlur} onChange={handleChange} id="country" value={values.country} name="country" type="number" autoComplete="country" placeholder="country" className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/> */}
                            {touched.country && errors.country && <p className='text-red-500'>{errors.country}</p>}
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-2 mt-3">
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
                    <label for="image" class="block text-sm mt-3 font-medium leading-6 text-gray-900">Image</label>

                    <input type="file" onBlur={handleBlur} onChange={handleChange} id='image' accept='image/*' multiple class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  placeholder-gray-400/70 border-2  focus:border-[#398378] focus:outline-[#398378] " />
                    {touched.image && errors.image && <p className='text-red-500'>{errors.image}</p>}
                </div>

        
            {/* </div>
            <div className="flex gap-x-2">
                <div className='flex-auto'>
                    <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                    <div className="mt-2">
                        <input onBlur={handleBlur} onChange={handleChange} id="user_name" value={values.user_name} name="user_name" type="text" autoComplete="user_name" placeholder="User Name" className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/>
                        {touched.user_name && errors.user_name && <p className='text-red-500'>{errors.user_name}</p>}
                    </div>
                </div>
                <div className='flex-auto'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="mt-2">
                        <input onBlur={handleBlur} onChange={handleChange} id="email" value={values.email} name="email" type="email" autoComplete="email" placeholder='Email' className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                    </div>
                </div>
            </div>
            <div>
                <div className="col-span-full shadow-sm">
                    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                    <div className="mt-2 flex justify-center shadow-sm rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                            </svg>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label htmlFor="image" className="relative cursor-pointer rounded-md bg-white font-semibold text-[#398378]  focus-within:outline-none focus-within:ring-2 focus-within:ring-[#31C48D] focus-within:ring-offset-2 hover:text-[#31C48D]">
                                    <span>Upload a file</span>
                                    <input onBlur={handleBlur}  accept="image/png, image/jpeg, image/gif, image/jpg, image/webp" onChange={handleChange} id="image" name="image" type="file" className="sr-only focus:outline-[#398378]"/>
                                    <span>{values.image?.name}</span>
                                </label>
                                {touched.image && errors.image && <p className='text-red-500'>{errors.image}</p>}
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">image (png,jpg,jpeg,gif,webp)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-2">
                <div className='flex-auto'>
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                    <div className="mt-2">
                        <input onBlur={handleBlur} onChange={handleChange} id="city" value={values.city} name='city'  type="text" autoComplete="city" placeholder='City' className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/>
                        {touched.city && errors.city && <p className='text-red-500'>{errors.city}</p>}
                    </div>
                </div>
                <div className='flex-auto'>
                    <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">Street</label>
                    <div className="mt-2">
                        <input onBlur={handleBlur} onChange={handleChange} id="street" name='street' value={values.street}  type="text" autoComplete="street" placeholder='Street' className="block w-full focus:outline-[#398378] bg-white rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                        {touched.street && errors.street && <p className='text-red-500'>{errors.street}</p>}
                    </div>
                </div>
            </div>
            <div className="flex gap-x-2">
                <div className='flex-auto'>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">phone</label>
                    <div className="mt-2">
                        <input onBlur={handleBlur} onChange={handleChange} id="phone" value={values.phone} name="phone" type="tel" autoComplete="phone" placeholder='Phone Number' className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                        {touched.phone && errors.phone && <p className='text-red-500'>{errors.phone}</p>}
                    </div>
                </div>
                <div className='flex-auto'>
                    <label htmlFor="another_phone" className="block text-sm font-medium leading-6 text-gray-900">Another Phone Number</label>
                    <div className="mt-2">
                        <input onBlur={handleBlur} onChange={handleChange} id="another_phone" name='another_phone' value={values.another_phone}  type="tel" autoComplete="another_phone" placeholder='Another Phone Number' className="block w-full focus:outline-[#398378] rounded-md border-2 bg-white p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                        {touched.another_phone && errors.another_phone && <p className='text-red-500'>{errors.another_phone}</p>}
                    </div>
                </div>
            </div>
            <div>
                <div className="col-span-full shadow-sm">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Image of the commercial register</label>
                    <div className="mt-2 flex justify-center shadow-sm rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                            </svg>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label htmlFor="register_photo" className="relative cursor-pointer rounded-md bg-white font-semibold text-[#398378]  focus-within:outline-none focus-within:ring-2 focus-within:ring-[#31C48D] focus-within:ring-offset-2 hover:text-[#31C48D]">
                                    <span>Upload a file</span>
                                    <input onBlur={handleBlur} accept="image/png, image/jpeg, image/gif, image/jpg, image/webp" onChange={handleChange} id="register_photo" name="register_photo" type="file" className="sr-only focus:outline-[#398378]"/>
                                    <span>{values.register_photo?.name}</span>
                                </label>
                                {touched.register_photo && errors.register_photo && <p className='text-red-500'>{errors.register_photo}</p>}
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">image (png,jpg,jpeg,gif,webp)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div> */}
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
</div>
    </>
}

export default AddPropertyForm;
