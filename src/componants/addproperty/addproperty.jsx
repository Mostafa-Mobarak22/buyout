import React from 'react';
import * as Yup from 'yup'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import { toast, Bounce, ToastContainer } from 'react-toastify'
import {useFormik} from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
const AddPropertyForm = () => {
    const {id} = useParams()
    const navigate = useNavigate()
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
        "Apartment" , 
        "Villa" , 
        "Duplex" , 
        "Penthouse" , 
        "Chalet" , 
        "Townhouse" , 
        "Twin House" , 
        "Room" ,
        "Cabin" , 
        "Roof" ,
        "iVilla" ,
        "Hotel Apartment" , 
        "Residential Land" ,
        "Other Residential" ,
        "Office" ,
        "Office Space",
        "Retail" , 
        "Restaurant" , 
        "Pharmacy" , 
        "Clinic" , 
        "Commercial Building" , 
        "Commercial Land" , 
        "Agricultural" , 
        "Warehouse" , 
        "Garage" , 
        "Showroom" , 
        "Co-Working Space" , 
        "Medical Facility" , 
        "Other Commercial" , 

    ])
    const handleFileChange = (event) => {
        const files = event.currentTarget.files;
        setValues((prevValues) => ({
            ...prevValues,
            image: files
        }));
    };
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
            "is_sale" :"Sale",
            "country":"Egypt",
            "street":"",
            "area":"",
            "image":[],
            "commercial":"Apartment",
            "location":"",
            "user":id
        },
        enableReinitialize: true,
        onSubmit: addProperty,
        validationSchema:Yup.object({
            title:Yup.string().required("title is required").min(5,"title must be more than 5 character").max(100,"title must be less than 100 character"),
            location:Yup.string().required("Should write Location Your Property" ).min(10,"location must be more than 10 character").max(150,"location must be less than 150 character"),
            description:Yup.string().required("Should write Description for Your Property" ),
            is_sale:Yup.string().required("Should choose Sale or Rent" ),
            property_type:Yup.string().required("Choose usage of Property"),
            bed:Yup.number().test("maxDigits","bed field must have exactly 1 digits",(bed) => String(bed).length === 1),
            bath:Yup.number().test("maxDigits","bath field must have exactly 1 digits",(bath) => String(bath).length === 1),
            price:Yup.number().required("Enter the property price" ).test("maxDigits","price field must have exactly 10 digits",(price) => String(price).length <= 10),
            governorate:Yup.string().required("Choose Governorate  of Your Property" ),
            area:Yup.number().required("Enter the property area" ).test("maxDigits","area field must have exactly 7 digits",(area) => String(area).length <= 7),
            commercial:Yup.string().required("Choose Type of Property"),
            city:Yup.string().required("Enter City  of Your Property" ).min(4,"city must be more than 4 character"),
            street:Yup.string().required("Enter street of Your Property" ).min(5,"street must be more than 5 character"),
            image: Yup.mixed().test("fileRequired", "Image is required", function (value) {
                return value && value.length > 0;
            }),
        })
    })
    async function addProperty(){
        const formData = new FormData();

        // Append each form value to FormData
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('property_type', values.property_type);
        formData.append('price', values.price);
        formData.append('bed', values.bed);
        formData.append('bath', values.bath);
        formData.append('governorate', values.governorate);
        formData.append('city', values.city);
        formData.append('is_sale', values.is_sale);
        formData.append('country', values.country);
        formData.append('street', values.street);
        formData.append('area', values.area);
        formData.append('commercial', values.commercial);
        formData.append('location', values.location);
        formData.append('user', id);
    
        // Append each file to FormData
        for (let i = 0; i < values.image.length; i++) {
            formData.append('image', values.image[i]);
        }
        let { data } = await axios.post("http://127.0.0.1:8000/property/properties/",formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },

        });    
        toast.success('Your Property Under Review', {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            navigate(`/myproperty`)
    }

    return <>
    <h2 className='text-3xl pt-5 text-center font-bold text-[#31C48D]'>Add Your Property</h2>
<div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[46rem]">
        <form className="space-y-6" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="title" value={values.title} name="title" type="text" autoComplete="title" placeholder='Title' className="block focus:outline-[#398378] w-full bg-white rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.title && errors.title && <p className='text-red-500'>{errors.title}</p>}
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2 mt-4">
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
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-x-2 mt-4">
                    <div className='flex-auto '>
                        <label htmlFor="is_sale" className="block text-sm font-medium leading-6 text-gray-900">Sale or Rent </label>
                        <div className="mt-1">
                            <select id="is_sale" onBlur={handleBlur} onChange={handleChange} name='is_sale' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                    <option >Sale</option>
                                    <option >Rent</option>
                            </select>
                            {touched.is_sale && errors.is_sale && <p className='text-red-500'>{errors.is_sale}</p>}
                        </div>
                    </div>
                    <div className='flex-auto '>
                        <label htmlFor="property_type" className="block text-sm font-medium leading-6 text-gray-900">Property Usage</label>
                        <div className="mt-1">
                            <select id="property_type" onBlur={handleBlur} onChange={handleChange} name='property_type' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                    <option >Residential</option>
                                    <option >Commercial</option>
                            </select>
                            {touched.property_type && errors.property_type && <p className='text-red-500'>{errors.property_type}</p>}
                        </div>
                    </div>
                    <div className='flex-auto '>
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
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2 mt-4">
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
                    <div className='flex-auto'>
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">country</label>
                        <div className="mt-1">
                            <select id="country" onBlur={handleBlur} onChange={handleChange} name='country' class="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 bg-white font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm">
                                <option >Egypt</option>
                            </select>
                            {touched.country && errors.country && <p className='text-red-500'>{errors.country}</p>}
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-2 mt-4">
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
                <div className="flex gap-x-2 mt-4">
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
                <div className='mt-4'>
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">description</label>
                    <div className="mt-1 w-full">
                        <textarea onBlur={handleBlur} onChange={handleChange} name='description' value={values.description} class="resize-none p-2 h-28 rounded-md w-100 block focus:outline-[#398378] border-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm" placeholder='Your description'></textarea>
                        {touched.description && errors.description && <p className='text-red-500'>{errors.description}</p>}
                    </div>
                </div>
                            
                <div className='mb-5'>
                    <label for="image" class="block text-sm mt-3 font-medium leading-6 text-gray-900">Image</label>

                    <input type="file" onBlur={handleBlur} onChange={handleFileChange} id='image' accept='image/*' multiple class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  placeholder-gray-400/70 border-2  focus:border-[#398378] focus:outline-[#398378] " />
                    {touched.image && errors.image && <p className='text-red-500'>{errors.image}</p>}
                </div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
</div>
    </>
}

export default AddPropertyForm;
