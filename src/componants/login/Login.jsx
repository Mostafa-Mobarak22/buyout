import React from 'react'
import crat2 from '../../assets/logo-no-background.png'
export default function Login() {
return <>
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src={crat2} alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
        <div class="mt-2">
          <input id="name" name="name" type="name" autocomplete="name" placeholder='User_Name' class="block w-full rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          {/* <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" placeholder='Password' class="block w-full rounded-md border-2 p-2 text-gray-950 font-2xl shadow-sm placeholder:text-gray-500 sm:text-sm "/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-[#398378] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#31C48D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-[#398378] hover:text-[#31C48D]">Register</a>
    </p>
  </div>
</div>
</>
}
