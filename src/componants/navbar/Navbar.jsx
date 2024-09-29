import React from 'react'
import profile from '../../assets/profile-photo.jpg'
import logo from '../../assets/logo-no-background.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
return <>
<div className="navbar bg-[#398378] px-5">
    <div className="flex w-40">
        <a className=""><img className='w-100' src={logo}/></a>
    </div>
    <div className="flex-none">
        <div className="dropdown dropdown-end px-3">
            <div tabIndex={0} role="button" className="w-10 h-10 grid pt-2 hover:text-[#31C48D]">
                <div className="indicator relative m-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 font-bold text-xl"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                    <span className="badge badge-md indicator-item">8</span>
                </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full hover:bg-[#31C48D]">
                    <img alt="Navbar component" src={profile} />
                </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#398378] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className='hover:bg-[#398378] hover:shadow'>
                    <a className="justify-between text-white font-semibold">Profile</a>
                </li>
                <li className="hover:bg-[#398378] hover:shadow"><a className='text-white font-semibold'>My Property</a></li>
                <li className='hover:bg-[#398378] hover:shadow'><Link to='login' className='text-white font-semibold'>Logout</Link></li>
            </ul>
        </div>
    </div>
</div>
</>
}
