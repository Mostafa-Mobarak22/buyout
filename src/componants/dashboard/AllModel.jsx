import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function AllModel() {

  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem("user_token")
    localStorage.removeItem("user_id")
    navigate('/login')
}
  return <>
<div className='grid grid-cols-12 '>
<div class="min-h-full col-span-2 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-screen w-full max-w-[16rem]  py-4 shadow-xl shadow-blue-gray-900/5">
  {/* <div className='fixed left-0 bottom-0'></div> */}
  <div class="mb-2 p-4">
    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Admin Dashboard</h5>
  </div>
  <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
  <Link to="alluser">
  <div role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div class="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
        </svg>
      </div>
      Accounts
    </div>
    </Link>
    <Link to="allproperty">
    <div role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div class="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
          <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
        </svg>
      </div>Properties
    </div>
    </Link>
    <Link to="/">
    <div role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
        </svg> */}
        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
</svg>
      </div>Home
    </div>
    </Link>




    <div onClick={()=>{logout()}} role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div class="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
          <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clip-rule="evenodd"></path>
        </svg>
      </div>Log Out
    </div>
  </nav>
</div>    
<div className='col-span-10 right-52  '>
  <Outlet/>
</div>
  </div>

{/* <div class="flex min-h-screen items-center justify-center">
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white shadow-md rounded-xl">
      <thead>
        <tr class="bg-blue-gray-100 text-gray-700">
          <th class="py-3 px-4 text-left">Model Name</th>
          <th class="py-3 px-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody class="text-blue-gray-900">
        <tr class="border-b border-blue-gray-200">
          <td class="py-3 px-4">Account</td>
          <td class="py-3 px-4">
            <Link to="/alluser" class="font-medium text-blue-600 hover:text-blue-800">Edit</Link>
          </td>
        </tr>
        <tr class="border-b border-blue-gray-200">
          <td class="py-3 px-4">Property</td>
          <td class="py-3 px-4">
            <Link to="alluser" class="font-medium text-blue-600 hover:text-blue-800">Edit</Link>
          </td>
        </tr>
        <tr class="border-b border-blue-gray-200">
          <td class="py-3 px-4">Ads</td>
          <td class="py-3 px-4">
            <Link to="alluser" class="font-medium text-blue-600 hover:text-blue-800">Edit</Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div> */}
  </>
}
