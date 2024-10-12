import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast, Bounce, ToastContainer } from 'react-toastify'
import Loading from '../../loading/Loading'
import { useParams } from 'react-router-dom'
export default function EditUser() {
    let {id} = useParams()
    const [profileData , setProfileData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [isActive,setIsActive] = useState(null)
    // const [isCompany,setIsCompany] = useState(null)
    useEffect(() => {
        getProfile()
    },[])
    async function getProfile() {
        try {
            await axios.get("http://127.0.0.1:8000/user/get/"+id+"/", {
            }).then((data)=>{
                console.log(data.data);
                console.log(typeof data.data.is_active)
                setProfileData(data.data);
                // setIsActive(data.data.is_active)
                let active = data.data.is_active
                // console.log(active)
                // let company = data.data.is_company
                // console.log(company)
                console.log(data.data.is_active)
                // console.log(data.data.is_company)
                setIsActive(active)
                // console.log(isActive)
                // setIsCompany(company)
                // console.log(isCompany)
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
            "is_active":profileData?.is_active,
            "is_company":profileData?.is_company,
            "is_member":profileData?.is_member,
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
        console.log(values)
        console.log(values.)
        // values.image = document.getElementById("image").files[0]
        console.log(values.is_active)
        console.log(document.querySelector('input[name="is_active"]:checked').value)
        // console.log(values.is_company)
        // console.log(document.querySelector('input[name="is_company"]:checked').value)
        // if ((document.querySelector('input[name="is_active"]:checked').value === 'true')){
        //     values.is_active = true
        //     console.log(values.is_active)
        // }
        // else{
        //     values.is_active = false
        //     console.log(values.is_active)
        // }
        // if (!(document.querySelector('input[name="is_company"]:checked').value === 'true')){
        //     values.is_company = true
        //     console.log(values.is_company)
        // }
        // else{
        //     values.is_company = false
        //     console.log(values.is_company)
        // }
        // values.is_active = document.querySelector('input[name="is_active"]:checked').value === 'true'
        values.register_photo = document.getElementById("register_photo").files[0]
        let {data} = await axios.patch("http://127.0.0.1:8000/user/"+id+"/",values, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(data)
        
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
    <div className="w-20 h-20 rounded-full mx-auto hover:bg-[#31C48D] shadow-lg" hidden={profileData.image ? false : true} >
        <img className='w-100 rounded-full' alt="Navbar component" src={"http://127.0.0.1:8000"+profileData.image} />
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit} encType='multipart/form-data'>
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
                        <img src={"http://127.0.0.1:8000"+profileData.image} alt="" />
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
                            <img src={"http://127.0.0.1:8000"+profileData.register_photo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <main class="grid  place-items-center py-2">
                <span className="block text-sm font-medium leading-6  pb-1 text-gray-900">Activation</span>
                <div class="grid  grid-cols-2 gap-2 rounded-xl bg-gray-200 ">
                    <div>
                        {/* {profileData?.is_active ? <input onBlur={handleBlur} onChange={handleChange} type="radio" name="is_active" id="active" value="true"  class="peer hidden"  checked  /> : <input onBlur={handleBlur} onChange={handleChange} type="radio" name="is_active" id="active"  value="true"  class="peer hidden" />} */}
                        <input onBlur={handleBlur} onChange={handleChange} type="radio" name="is_active" id="active"   value="true"  class="peer hidden" />
                        <label for="active" class="block text-sm cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#398378] peer-checked:font-bold peer-checked:text-white">Active</label>
                        {profileData.is_active ? <h1>true</h1> : <h1>false</h1>}
                    </div>

                    <div>
                        {/* {profileData?.is_active ?  <input onBlur={handleBlur} onChange={handleChange} type="radio" name="is_active" id="not-active" value={values.is_active}  class="peer hidden" />  :  <input onBlur={handleBlur} onChange={handleChange} type="radio" name="is_active" id="not-active" value={values.is_active}  class="peer hidden" checked/> } */}
                        <input onBlur={handleBlur} onChange={handleChange} type="radio" name="is_active" id="not-active" value="false"  class="peer hidden" /> 
                        <label for="not-active" class="block cursor-pointer text-sm pe-3 select-none rounded-xl p-2 text-center peer-checked:bg-red-700 ps-3 peer-checked:font-bold peer-checked:text-white">Not Active</label>
                    </div>
                </div>
                <span className="block text-sm font-medium leading-6 pt-4 pb-1 text-gray-900">Registeration</span>
                <div class="grid  grid-cols-2 gap-2 rounded-xl bg-gray-200 ">
                    
                    <div>
                        {/* {profileData.is_company ? <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_company" id="company" value="true"  class="peer hidden" checked /> : <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_company" id="company" value="true"  class="peer hidden" /> } */}
                        <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_company" id="company" value="true"  class="peer hidden" />
                        <label for="company" class="block text-sm cursor-pointer select-none rounded-xl p-2 is_company text-center peer-checked:bg-[#398378] peer-checked:font-bold peer-checked:text-white">Company</label>
                    </div>

                    <div>
                        
                        {/* {profileData?.is_company ? <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_company" id="not-company" value="false"  class="peer hidden" /> :<input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_company" id="not-company" value="false"  class="peer hidden" checked/> } */}
                        <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_company" id="not-company" value="false"  class="peer hidden" /> 
                        <label for="not-company" class="block cursor-pointer text-sm pe-3 select-none rounded-xl p-2 text-center peer-checked:bg-red-700 ps-3 peer-checked:font-bold peer-checked:text-white">Not Company</label>
                        {profileData.is_company ? <h1>true</h1> : <h1>false</h1>}
                    </div>
                </div>
                <span className="block text-sm font-medium leading-6 pt-4 pb-1 text-gray-900">Member</span>
                <div class="grid  grid-cols-2 gap-2 rounded-xl bg-gray-200 ">
                    
                    <div>
                        <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_member" id="member"  value="true" class="peer hidden"/>
                        <label for="member" class="block text-sm cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#398378] peer-checked:font-bold peer-checked:text-white">Yes</label>
                    </div>

                    <div>
                        
                        <input type="radio" onBlur={handleBlur} onChange={handleChange} name="is_member" id="not-member" value="false" class="peer hidden"/>
                        <label for="not-member" class="block cursor-pointer text-sm pe-3 select-none rounded-xl p-2 text-center peer-checked:bg-red-700 ps-3 peer-checked:font-bold peer-checked:text-white">No</label>
                        {profileData.is_member ? <h1>true</h1> : <h1>false</h1>}
                    </div>
                </div>                
            </main>

            <div className="py-2"> 
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
        
    </div>
</div>

    
    }

</>
}
