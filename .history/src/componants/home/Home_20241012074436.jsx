import React, { useEffect, useState } from 'react'
import Cart from '../cart/Cart'
import axios from 'axios'
import Loading from '../loading/Loading'
import { Link, NavLink } from 'react-router-dom'
export default function Home() {
  const [buy,setBuy] = useState("sale")
  const [bath,setBath] = useState()
  const [bed,setBed] = useState()
  const [properties,setProperties] = useState(null)
  const [searchproperties,setsearchproperties] = useState(null)
  const [property,setProperty] = useState("")
  function buyValue(value){
    setBuy(value)
  }
  function propertyValue(value){
    setProperty(value)
  }
  function bedValue(value){
    setBed(value)
  }
  function bathValue(value){
    setBath(value)
  }
  const [typeProperty,setTypeProperty] = useState([
    'Office',
    'Retail',
    'Restaurant', 
    'Pharmacy', 
    'Clinic',
    'Commercial Building',
    'Commercial Land', 
    'Agricultural', 
    'Warehouse', 
    'Garage',
    'Other Commercial', 

        
])
  useEffect(()=>{
    getProperty()
  },[])
  async function getProperty(){
    let {data} = await axios.get(`http://127.0.0.1:8000/property/properties/`)
    console.log(data)
    console.log(data[0].is_published)
    setProperties(data.filter((e)=>{return e.is_published==true}))
    searchproperties(data.filter((e)=>{return e.is_published==true}))
    // console.log(properties)
  }
  function bedToggle(){
    document.getElementById("bed").classList.toggle("hidden")
  }
  function priceToggle(){
    document.getElementById("price").classList.toggle("hidden")
  }
  function bathToggle(){
    document.getElementById("bath").classList.toggle("hidden")
  }
  function dropdownToggle(){
    document.getElementById("dropdown").classList.toggle("hidden")
  }
  function buyToggle(){
    document.getElementById("sale").classList.toggle("hidden")
  }
  function search(){
    
    const searchArr= []
    let searchValue = document.getElementById('search-bar').value
    let property_type = document.getElementById('dropdownDefaultButton').value
    let property_bath = document.getElementById('bathdropdown').value
    let property_bed = document.getElementById('beddropdown').value
    let property_buy = document.getElementById('saledropdown').value
    let property_area = document.getElementById('area').value
    let property_maxprice = document.getElementById('max').value
    let property_minprice = document.getElementById('min').value
    searchArr.push({searchValue})
    searchArr.push({property_type})
    searchArr.push({property_bath})
    searchArr.push({property_bed})
    searchArr.push({property_buy})
    searchArr.push({property_area})
    searchArr.push({property_maxprice})
    searchArr.push({property_minprice})
    let x = (properties.filter((property)=>{ 
      return (
        (searchArr[0].searchValue=="" || property.location.toLowerCase().includes(searchArr[0].searchValue.toLowerCase()))&&
        (searchArr[1].property_type=="" || property.commercial ==  searchArr[1].property_type)&&
        (searchArr[3].property_bed=="" || property.bed == searchArr[3].property_bed)&&
        (searchArr[2].property_bath=="" || property.bath == searchArr[2].property_bath)&&
        (searchArr[4].property_buy=="" || property.is_sale ==  searchArr[4].property_buy)&&
        (searchArr[5].property_area=="" || parseFloat(property.area) == parseFloat(searchArr[5].property_area))&&
        ((Number(searchArr[6].property_maxprice) == "" || property.price <=  Number(searchArr[6].property_maxprice))&&(Number(searchArr[7].property_minprice) == "" || property.price >=  Number(searchArr[7].property_minprice)))
      )
    }))




    console.log(x)
    setProperties(x)
  }
  function reset(){
    getProperty()
  }
  return <>
{ !properties ? <Loading/> :  
  <div className='container pt-10 '>
    <div className='flex flex-wrap mt-3 m-5 mx-0 pb-5 border-b-2 gap-3'>
      <div className='relative'>
        <i class="fa-solid fa-magnifying-glass absolute text-gray-500 inset-y-0 right-[12px] top-[11.5px]"></i>
        <input type="text" id='search-bar' placeholder='search by city, location' className='py-2 px-3 focus:ring-0 rounded-full border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
      </div>
      <div className='relative'>
      <button id="dropdownDefaultButton" value={property} onClick={()=>{dropdownToggle()}}  data-dropdown-toggle="dropdown" class="text-gray-700 border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:text-white focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button">{property ? property : "Property Type"}
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="dropdown" class="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li >
                <button onClick={()=>{propertyValue('');dropdownToggle()}} class="block text-gray-700 px-2 w-full py-2 hover:bg-gray-200 ">Property Type</button>
              </li>
          {
            //  <button onClick={()=>{dropdownToggle()}} class="block text-gray-700 px-2 w-full py-2 hover:bg-gray-200 ">"Property Type"</button>
            typeProperty.map((item, index) => (
              <li key={index}>
                <button onClick={()=>{propertyValue(item);dropdownToggle()}} class="block text-gray-700 px-2 w-full py-2 hover:bg-gray-200 ">{item}</button>
              </li>
            ))
          }
        </ul>
      </div>
      </div>
      <div className='relative'>
      <button id="saledropdown" value={buy} onClick={()=>{buyToggle()}} data-dropdown-toggle="sale" class="text-gray-700 border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:text-white focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button">{buy=="sale"?"Sale":"Rent"}
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="sale"  class="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="saledropdown">
        
              <li >
                <button onClick={()=>{buyValue("rent");buyToggle()}} class="block text-gray-700 px-1 w-full py-2 hover:bg-gray-200 ">Rent</button>
              </li>
              <li >
                <button onClick={()=>{buyValue("sale");buyToggle()}} class="block px-1 w-full py-2 hover:bg-gray-200 text-gray-700">Sale</button>
              </li>
        </ul>
      </div>
      </div>
      <div className='relative'>
      <button id="bathdropdown" value={bath} onClick={()=>{bathToggle()}} data-dropdown-toggle="bath" class="text-gray-700 border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:text-white focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> {bath ? bath : null } Bath
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="bath" class="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="bathdropdown">
        
          {
            [1,2,3,4,5,6,7,8,9].map((item, index) => (
              <li key={index}>
                <button  onClick={()=>{bathValue(item);bathToggle()}} class="block px-2 w-full text-gray-700 py-2 hover:bg-gray-200 ">{item}</button>
              </li>
            ))
          }
        </ul>
      </div>
      </div>
      <div className='relative'>       
      <button id="pricedropdown"  onClick={()=>{priceToggle()}}  data-dropdown-toggle="price" class="text-gray-700 border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:text-white focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> Price
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="price"  class="z-10 absolute top-14 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
        <div className='flex gap-x-3 py-4 px-3 rounded-lg bg-white'>
          <input type="number" id='min' placeholder='Min. Price (EGP)' className='py-2 px-2 focus:ring-0 rounded-lg w-44 border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
          _
          <input type="number" id='max' placeholder='Max. Price (EGP)' className='py-2 px-2 focus:ring-0 rounded-lg w-44 border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
        </div>
    </div>
    </div>
      <div className='relative'>
      <button id="beddropdown" value={bed} onClick={()=>{bedToggle()}}  data-dropdown-toggle="bed" class="text-gray-700 border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:text-white focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> {bed ? bed : null } Bed
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="bed" class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-24  dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="beddropdown">
        
          {
            [1,2,3,4,5,6,7,8,9].map((item, index) => (
              <li key={index}>
                <button onClick={()=>{bedValue(item);bedToggle()}} class="block text-gray-700 px-2 w-full py-2 hover:bg-gray-200 ">{item}</button>
              </li>
            ))
          }
        </ul>
      </div>
      </div>
      <div>
        <input type="number" id='area' placeholder='Area sqm' className='py-2 px-2 focus:ring-0 rounded-lg w-24 border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
      </div>

      <button onClick={()=>{search()}} className='py-2 px-4 text-white bg-[#398378] rounded-lg font-medium hover:bg-[#31C48D]'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
      <button onClick={()=>{reset()}} className='py-2 px-4 text-white bg-[#398378] rounded-lg font-medium hover:bg-[#31C48D]'><i class="fa-solid fa-magnifying-glass"></i> Reset</button>
    </div>
    
    
    <div className='grid sm:ms-5 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-4'>
    {
                        properties.map((property)=>{
                          
                            return  <Cart properties={property}/>
                        })
                    }
      {/* <Cart/> */}
    </div>
    
  </div>}
  
  </>
    
  
}