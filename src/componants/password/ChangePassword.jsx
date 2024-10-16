import React from 'react'
import { useContext, useState } from 'react'
import {useFormik} from 'formik'
import crat2 from '../../assets/logo-no-background.png'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'
export default function ChangePassword() {
    // const { token,setToken,id,setId } = useContext(tokenContext)
    const navigate = useNavigate()
    const [isLoad,setIsLoad]=useState(false)
    const [errMsg , setErrMsg] = useState('')
    const [sucMsg , setSucMsg] = useState('')
    const [active , setActive] = useState('')
    let { handleSubmit,values,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues:{
            "new_password":"",
            "repassword":"",
            "email":""
        },
        onSubmit: register,
        validationSchema:Yup.object({
            new_password:Yup.string().required("password is required").matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,50}$/,"At least one uppercase letter,least one special character,length is between 8 and 50 characters"),
            repassword:Yup.string().required("repassword is required").oneOf([Yup.ref("new_password")],"repassword not matcthed"),
            email:Yup.string().required("email is required").email("email not correct"),
        })
    })
    
    async function register(){
        setIsLoad(true)
        setErrMsg("")
        setSucMsg("")
        await axios.post("http://127.0.0.1:8000/user/savepassword/",values).then(({data})=>{
            setErrMsg(data.error)
            setSucMsg(data.success)
            sucMsg && navigate("/login")
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
                <label htmlFor="new_password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="new_password" value={values.new_password} name="new_password" type="password"  placeholder='Enter Your new_password' className="block focus:outline-[#398378] w-full rounded-md border-2 p-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.new_password && errors.new_password && <p className='text-red-500'>{errors.new_password}</p>}
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="repassword" className="block text-sm font-medium leading-6 text-gray-900">Re_Password</label>
                    {/* <div className="text-sm">
                        <a href="#" className="font-semibold text-[#398378] hover:text-[#31C48D]">Forgot password?</a>
                    </div> */}
                </div>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="repassword" value={values.repassword} name="repassword" type="password" placeholder='repassword' className="block focus:outline-[#398378] w-full rounded-md border-2 p-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm "/>
                    {touched.repassword && errors.repassword && <p className='text-red-500'>{errors.repassword}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                    <input onBlur={handleBlur} onChange={handleChange} id="email" value={values.email} name="email" type="email" autoComplete="email" placeholder='Enter Your Email' className="block focus:outline-[#398378] w-full rounded-md border-2 p-2 text-gray-950 font-2xl bg-white shadow-sm placeholder:text-gray-500 sm:text-sm"/>
                    {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                </div>
            </div>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" disabled={isLoad}>Change Password {isLoad &&<i className='absolute right-0 fas fa-spinner fa-spin me-3 text-xl'></i>}</button>
                {errMsg && <p className='text-red-500 text-center py-3'>{errMsg}</p>}
                {active && <p className='text-red-500 text-center py-3'>{active}</p>}
                {sucMsg && <p className='text-emerald-500 text-center py-3'>Welcom {sucMsg}</p>}
            </div>
        </form>
    </div>
</div>
    </>
}

