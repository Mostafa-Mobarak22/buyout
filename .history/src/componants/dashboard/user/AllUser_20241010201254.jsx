import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../loading/Loading'
import img from '../../../assets/profile-photo.jpg'
import { Link } from 'react-router-dom'
export default function AllUser() {
    const [usersData , setUsersData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [count, setCount] = useState(0)
    useEffect(() => {
        getUsers()
    },[])
    async function getUsers() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/user/");
            setUsersData(response.data);  
            setCount(response.data.length)
            console.log(count)
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching profile data", error);
        }
      }
      async function deleteUser(user) {
        try {
            const response = await axios.delete("http://127.0.0.1:8000/user/delete/"+user+"/");
            console.log(response.data)
            setIsLoading(false);
            getUsers()
        } catch (error) {
            console.error("Error fetching profile data", error);
        }
      }
  return <>
{
    isLoading ? <Loading/> :
<section className="container  mx-auto">
    <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 "> User Accounts</h2>

        <span className="px-3 py-1 text-xs text-white bg-blue-100 rounded-full dark:bg-[#398378]">{count} users</span>
    </div>

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-[#398378]">
                            <tr>
                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-white">ID</th>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-white">
                                    <div className="flex items-center gap-x-3">
                                        
                                        <span>Name</span>
                                    </div>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-white">
                                
                                        <span>Status</span>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-white">Email address</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-white">Phone Number</th>
                                <th scope="col" className=" py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-white">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
{ usersData &&
usersData.map((value,key)=>{
    return    <tr key={key}>
        <td className="px-4 py-4 text-sm text-gray-950 whitespace-nowrap">{value.id}</td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src={!value.image ? img : value.image} alt=""/>
                        <div>
                            <h2 className="font-medium text-gray-950 ">{value.user_name}</h2>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                {
                    !value.is_active ?    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-700"></span>

                    <h2 className="text-sm font-normal text-red-700">Not Active</h2>
                </div> :
                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                        <h2 className="text-sm font-normal text-emerald-500">Active</h2>
                </div>
                }

            </td>
            <td className="px-4 py-4 text-sm text-gray-950 whitespace-nowrap">{value.email}</td>
            <td className="px-4 py-4 text-sm text-gray-950 whitespace-nowrap">{value.phone}</td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button onClick={()=>{deleteUser(value.id)}} className="text-gray-950 transition-colors duration-200 dark:hover:text-red-500 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>

                    <Link to={"/edituser/"+value.id} className="text-gray-950 transition-colors duration-200 dark:hover:text-yellow-500 hover:text-yellow-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </Link>
                </div>
            </td>
        </tr>
    })
}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>    
}


  
  
  </>
}
