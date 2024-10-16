import React from 'react'
import { useContext, useState } from 'react'
import {useFormik} from 'formik'
import crat2 from '../../assets/logo-no-background.png'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { tokenContext } from '../../assets/context/TokenContext'
export default function ResetPassword() {
    const navigate = useNavigate()
    const { token,setToken,id,setId } = useContext(tokenContext)
    const [isLoad,setIsLoad]=useState(false)
    const [errMsg , setErrMsg] = useState('')
    const [sucMsg , setSucMsg] = useState('')
    const [active , setActive] = useState('')
    let { handleSubmit,values,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues:{
            "email":"",
            "user_name":"",
        },
        onSubmit: register,
        validationSchema:Yup.object({
            email:Yup.string().required("email is required").email("email not correct"),
        })
    })
    
    async function register(){
        setIsLoad(true)
        setErrMsg("")
        setSucMsg("")
        setActive("")
        await axios.post("http://127.0.0.1:8000/user/password/",values).then(({data})=>{
            setSucMsg(data.success)
            setErrMsg(data.error)
            setIsLoad(false)
        }).catch((err)=>{
        })

    }
return <>
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={crat2} alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#398378]">Change Password</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="email" value={values.email} name="email" type="email" autoComplete="email" placeholder='Enter Your Email' className="block focus:outline-[#398378] w-full rounded-md border-2 p-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                    {/* <div className="text-sm">
                        <a href="#" className="font-semibold text-[#398378] hover:text-[#31C48D]">Forgot password?</a>
                    </div> */}
                </div>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="user_name" value={values.user_name} name="user_name" type="text" placeholder='User_Name' className="block focus:outline-[#398378] w-full rounded-md border-2 p-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm "/>
                    {touched.user_name && errors.user_name && <p className='text-red-500'>{errors.user_name}</p>}
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" disabled={isLoad}>Send Link {isLoad &&<i className='absolute right-0 fas fa-spinner fa-spin me-3 text-xl'></i>}</button>
                {errMsg && <p className='text-red-500 text-center py-3'>{errMsg}</p>}
                {active && <p className='text-red-500 text-center py-3'>{active}</p>}
                {sucMsg && <p className='text-emerald-500 text-center py-3'>{sucMsg}</p>}
            </div>
        </form>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <NavLink to='/signup' className="font-semibold leading-6 text-[#398378] hover:text-[#31C48D]">Sign up</NavLink>
            
        </p> */}
    </div>
</div>
    </>
}
