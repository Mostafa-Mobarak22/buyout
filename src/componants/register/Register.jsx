import React, { useState } from 'react'
import './register.css'
import {useFormik} from 'formik'
import crat2 from '../../assets/logo-no-background.png'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
export default function Register() {

    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    const [isLoad,setIsLoad]=useState(false)

    let { handleSubmit,values,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues:{
            "user_name":"",
            "password":"",
            "phone":"",
            "email":"",
        },
        onSubmit: register,
        validationSchema:Yup.object({
            user_name:Yup.string().required("User_Name is required").min(5,"User_Name must be more than 5 character").max(25,"Name must be less than 25 character"),
            email:Yup.string().required("email is required").email("email not correct"),
            password:Yup.string().required("password is required").matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,50}$/,"At least one uppercase letter,least one special character,length is between 8 and 50 characters"),
            phone:Yup.string().required("phone is required").matches(/^01[0-2,5]{1}[0-9]{8}$/,"phone number not correct")
        })
    })

    async function register(){
        setIsLoad(true)
        let {data} = await axios.post("http://127.0.0.1:8000/user/add/",values)
        console.log(data)
        setSuccess(data.success_message)
        setError(data.error_message)
        setIsLoad(false)
    }
return <>
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={crat2} alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="name" value={values.user_name} name="user_name" type="name" autoComplete="name" placeholder='User_Name' className="block focus:outline-[#398378] w-full bg-white rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.user_name && errors.user_name && <p className='text-red-500'>{errors.user_name}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="email" value={values.email} name="email" type="email" autoComplete="email" placeholder='Email' className="block focus:outline-[#398378] bg-white w-full rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">phone</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="phone" value={values.phone} phone="phone" type="tel" autoComplete="phone" placeholder='Phone Number' className="block focus:outline-[#398378] bg-white w-full rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.phone && errors.phone && <p className='text-red-500'>{errors.phone}</p>}
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          {/* <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
                </div>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="password" value={values.password} name="password" type="password" placeholder='Password' className="block bg-white w-full rounded-md border-2 focus:outline-[#398378] p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
                </div> 
            </div>

            <div>
                <button type="submit" className="flex relative w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-sm font-bold leading-6  text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-[#ADBFB8]" disabled={isLoad}>Sign up {isLoad &&<i className='absolute right-0 fas fa-spinner fa-spin me-3 text-xl'></i>}</button> 
                {success && <p className='text-red-500 text-center py-2'>{success}</p>}
                {error && <p className='text-red-500 text-center py-2'>{error}</p>}
            </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
            I am a member?
            <Link to='/login' className="font-semibold leading-6 text-[#398378] hover:text-[#31C48D]">Login</Link>
        </p>
    </div>
</div>
    </>
}