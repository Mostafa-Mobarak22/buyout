import React from 'react'
import { Link } from 'react-router-dom'

export default function AllModel() {
  
  return <>
<div class="flex min-h-screen items-center justify-center">
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
</div>
  </>
}
