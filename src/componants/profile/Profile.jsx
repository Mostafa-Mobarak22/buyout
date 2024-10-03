import React from 'react'
import {useFormik} from 'formik'
import crat2 from '../../assets/logo-no-background.png'
import * as Yup from 'yup'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import { toast, Bounce, ToastContainer } from 'react-toastify'

export default function Profile() {
    const [profileData , setProfileData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        getProfile()
    },[])

    async function getProfile() {
        try {
            await axios.get("http://127.0.0.1:8000/user/get/26/", {
            }).then((data)=>{
                setProfileData(data.data);  
                setIsLoading(false)
            })
        } catch (error) {
            setIsLoading(true)
            console.error("Error fetching profile data", error);
        }
    }
    let { handleSubmit,values,handleChange,errors,touched,handleBlur,setValues} = useFormik({
        initialValues:{
            "user_name":profileData?.user_name,
            "phone":profileData?.phone,
            "email":profileData?.email,
            "city":profileData?.city,
            "street":profileData?.street,
            "register_photo":profileData?.register_photo,
            "another_phone":profileData?.another_phone,
            "image":profileData?.image,
        },
        enableReinitialize: true,
        onSubmit: editProfile,
        validationSchema:Yup.object({
            user_name:Yup.string().required("User_Name is required").min(5,"User_Name must be more than 5 character").max(25,"Name must be less than 25 character"),
            city:Yup.string().nullable().min(3,"city must be more than 3 character").max(25,"city must be less than 25 character"),
            street:Yup.string().nullable().min(5,"street must be more than 5 character").max(50,"street must be less than 50 character"),
            email:Yup.string().required("email is required").email("email not correct"),
            phone:Yup.string().required("phone is required").matches(/^01[0-2,5]{1}[0-9]{8}$/,"phone number not correct"),
            another_phone:Yup.string().nullable().matches(/^01[0-2,5]{1}[0-9]{8}$/,"phone number not correct"),
            image: Yup.mixed().nullable().test('fileFormat', 'Only image files are allowed', value => {
                if (values.image) {
                    const supportedFormats = ['png','jpg','jpeg','gif','webp'];
                        return supportedFormats.includes(values.image.split('.').pop());
                }
                return true;
            }),
            register_photo: Yup.mixed().nullable().test('fileFormat', 'Only image files are allowed', value => {
                if (values.register_photo) {
                    const supportedFormats = ['png','jpg','jpeg','gif','webp'];
                        return supportedFormats.includes(values.register_photo.split('.').pop());
                }
                return true;
            })
        })
    })
    async function editProfile(){
        values.image = document.getElementById("image").files[0]
        values.register_photo = document.getElementById("register_photo").files[0]
        let {data} = await axios.patch("http://127.0.0.1:8000/user/26/",values, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        getProfile()
        toast.success('Your Account Updated', {
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
    }
return <>

    {
        !profileData ? <Loading /> : 
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={crat2} alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update your profile</h2>
    </div> */}
    <div className="w-20 h-20 rounded-full mx-auto hover:bg-[#31C48D] shadow-lg">
        <img className='w-100 rounded-full' alt="Navbar component" src={"http://127.0.0.1:8000"+profileData.image} />
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="flex gap-x-2">
                <div className='flex-auto'>
                    <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                    <div className="mt-2">
                        <input onBlur={handleBlur} onChange={handleChange} id="user_name" value={values.user_name} name="user_name" type="text" autoComplete="user_name" placeholder={profileData.user_name} className="block w-full focus:outline-[#398378] rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm bg-white"/>
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
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
</div>
    
    }

</>
}