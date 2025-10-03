import React, { useEffect, useState } from 'react'
import './landing.css'
import ContactUs from '../ContactUs/ContactUs'
import Cart from '../cart/Cart'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Landing() {
  const navigate = useNavigate()
  const [bath,setBath] = useState("")
  function bathToggle(){
    document.getElementById("bath").classList.toggle("hidden")
  }
  function bathValue(value){
    setBath(value)
  }
  const [bed,setBed] = useState("")
  function bedToggle(){
    document.getElementById("bed").classList.toggle("hidden")
  }
  function bedValue(value){
    setBed(value)
  }
  const [buy,setBuy] = useState("Sale")
  function buyValue(value){
    setBuy(value)
  }
  function buyToggle(){
    document.getElementById("buy").classList.toggle("hidden")
  }
  const [usage,setUsage] = useState("Residential")
  function usageValue(value){
    setUsage(value)
  }
  function usageToggle(){
    document.getElementById("usage").classList.toggle("hidden")
  }
  const [typeresidential,setTypeResidential] = useState([
    'Apartment',
    'Villa',
    'Duplex', 
    'Penthouse', 
    'Chalet', 
    'Townhouse', 
    'Twin House', 
    'Room',
    'Cabin',
    'Roof',
    'iVilla', 
    'Hotel Apartment',
    'Residential Land', 
    'Other Residential', 
])
  const [residential,setResidential] = useState("")
  function residentialValue(value){
    setResidential(value)
  }
  function residentialToggle(){
    document.getElementById("residential").classList.toggle("hidden")
  }
  const [typecommercial,setTypeCommercial] = useState([
    'Office',
    'Retail',
    'Restaurant',
    'Pharmacy',
    'Clinic',
    "Land",
    'Agricultural', 
    'Warehouse', 
    'Garage',
    'Showroom',
    'Commercial Land', 
    'Commercial Building',
    'Co-Working Space',
    'Medical Facility',
    'Other Commercial', 
])
  const [commercial,setcommercial] = useState("")
  function commercialValue(value){
    setcommercial(value)
  }
  function commercialToggle(){
    document.getElementById("commercial").classList.toggle("hidden")
  }
  function priceToggle(){
    document.getElementById("price").classList.toggle("hidden")
  }
  const [minprice, setMinPrice] = useState("")
  const [maxprice, setMaxPrice] = useState("")

  const handleMinPrice = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    setMinPrice(newValue);
  };
  const handleMaxPrice = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    setMaxPrice(newValue);
  };
  function areaToggle(){
    document.getElementById("area").classList.toggle("hidden")
  }
  const [minarea, setMinarea] = useState("")
  const [maxarea, setMaxarea] = useState("")

  const handleMinarea = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    setMinarea(newValue);
  };
  const handleMaxarea = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    setMaxarea(newValue);
  };
  const [properties,setProperties] = useState([])
  async function newest_properties(){
    const {data} = await axios.get("http://127.0.0.1:8000/property/newest/")
    setProperties(data)
  }
  useEffect(() => {
    newest_properties()
  }, [])
  async function findProperty(){
    const {data} = await axios.post("http://127.0.0.1:8000/property/search/",
      {
        bath:bath,
        bed:bed,
        maxarea:maxarea,
        minarea:minarea,
        minprice:minprice,
        maxprice:maxprice,
        buy:buy,
        residential:residential,
        commercial:commercial,
        usage:usage,
        search:document.getElementById("search-bar").value,
      }
    )
    console.log(data)
    localStorage.setItem("data",JSON.stringify(data))
    navigate("/properties")
  }
  return <>
<div className='landing h-screen relative'>
  <div className='bg-black/50 w-full h-full'>
    <div className='md:w-[550px] sm:w-[400px] absolute z-20 top-52 left-16'>
      <h1 className='font-bold text-white text-5xl tracking-wide leading-loose'>
        We will help you find your <span className='text-green-500'>Wonderful</span> home
      </h1>
      <p className='mt-5 text-gray-300'>
      A great plateform to buy, sell and rent your properties without any agent or commisions. 
      </p>
    </div>
  </div>

</div>
<div className='search  w-screen ' >
  <div className='relative container px-6 py-10' >
    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl" id='search'>Search to Find Your Property </h1>

    <p class="max-w-2xl mx-auto my-6   text-center text-gray-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
    </p>
    <div className='bg-black/50 mt-10 translate-x-[50%] p-3 flex flex-col translate-y-[-50%] rounded-xl absolute top-[250px] right-[50%] '>
      <div className='flex flex-col sm:flex-row gap-3 mb-3'>
        <div>
          <button id="buydropdown"   onClick={()=>{buyToggle()}} class="text-gray-700 w-[150px] relative bg-white border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> {buy=="Sale"?"Sale":"Rent"}
            <svg class="w-2.5 h-2.5 absolute top-4 right-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="buy"  class="z-10 mt-1 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24">
            <ul class="py-1 text-sm text-gray-700 ">
              <li >
                <button onClick={()=>{buyValue("Rent");buyToggle()}} class="block text-gray-700 px-1 w-full py-2 hover:bg-gray-200 ">Rent</button>
              </li>
              <li >
                <button onClick={()=>{buyValue("Sale");buyToggle()}} class="block px-1 w-full py-2 hover:bg-gray-200 text-gray-700">Sale</button>
              </li>
            </ul>
          </div>
        </div>    
        <div className='relative'>
          <i class="fa-solid fa-location-dot text-lg absolute right-[15px] top-[12px] text-gray-500 "></i>
          <input type="text" id='search-bar' placeholder='search by city, location' className='py-2 w-72 px-3 focus:ring-0 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
        </div>  
        <div >
          <button id="beddropdown"   onClick={()=>{bedToggle()}} class="text-gray-700 w-28 bg-white border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> {bed ? bed : null } bed
            <svg class="w-2.5 h-2.5 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="bed"  class="z-10 mt-1 absolute hidden max-h-32 overflow-scroll bg-white divide-y divide-gray-100 rounded-lg shadow w-24">
            <ul class="py-1 text-sm text-gray-700  ">
            {
                [0,1,2,3,4,5,6,7,8,9].map((item, index) => (
                  <li key={index}>
                    <button  onClick={()=>{bedValue(item);bedToggle()}} class="block px-2 w-full text-gray-700 py-2 hover:bg-gray-200 ">{item}</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div> 
      </div>
      <div className='flex flex-col sm:flex-row gap-3 mb-3'>
        <div>
          <button id="usagedropdown"   onClick={()=>{usageToggle()}} class="text-gray-700 w-[150px] bg-white border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button">{usage=="Residential"?"Residential":"Commercial"}
            <svg class="w-2.5 h-2.5 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="usage"  class="z-10 mt-1 w-40 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow ">
            <ul class="py-1 text-sm text-gray-700 ">
              <li >
                <button onClick={()=>{usageValue("Residential");usageToggle()}} class="block text-gray-700 px-1 w-full py-2 hover:bg-gray-200 ">Residential</button>
              </li>
              <li >
                <button onClick={()=>{usageValue("Commercial");usageToggle()}} class="block px-1 w-full py-2 hover:bg-gray-200 text-gray-700">Commercial</button>
              </li>
            </ul>
          </div>
        </div> 
        <div className='relative'>
          <button id="pricedropdown"   onClick={()=>{priceToggle()}} class="text-gray-700 relative w-72 bg-white border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center" type="button">{(minprice&&maxprice)?"from "+minprice+" to "+maxprice +" EGP":(minprice>0)?"from "+minprice+" EGP":(maxprice>0)?"up to "+maxprice+" EGP":"Price" }
            <svg class="w-2.5 h-2.5 absolute right-5 top-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="price"  class="z-10 absolute top-12 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
            <div className='flex gap-x-3 py-4 px-3 rounded-lg bg-white'>
              <input type='text' onChange={handleMinPrice} value={minprice} id='min'  placeholder='Min. Price (EGP)' className='py-2 px-2 focus:ring-0 rounded-lg w-44 border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
              _
              <input type="text" id='max' onChange={handleMaxPrice} value={maxprice} placeholder='Max. Price (EGP)' className='py-2 px-2 focus:ring-0 rounded-lg w-44 border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
            </div>
          </div>
        </div> 
        <div>
          <button id="bathdropdown"   onClick={()=>{bathToggle()}} class="text-gray-700 w-28 bg-white border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> {bath ? bath : null } Bath
            <svg class="w-2.5 h-2.5 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="bath"  class="z-10 mt-1 absolute hidden max-h-32 overflow-scroll bg-white divide-y divide-gray-100 rounded-lg shadow w-24">
            <ul class="py-1 text-sm text-gray-700 ">
            {
                [0,1,2,3,4,5,6,7,8,9].map((item, index) => (
                  <li key={index}>
                    <button  onClick={()=>{bathValue(item);bathToggle()}} class="block px-2 w-full text-gray-700 py-2 hover:bg-gray-200 ">{item}</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-3 '>
        <div id='commercial-list' hidden={usage=="Residential"}>
            <button id="commercialdropdown"   onClick={()=>{commercialToggle()}} class="text-gray-700 relative bg-white border-2 w-[187px] border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> {commercial ? commercial : "Commercial Type" } 
              <svg class="w-2.5 h-2.5 absolute top-4 right-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div id="commercial"  class="z-10 mt-1 absolute hidden max-h-40 overflow-scroll bg-white divide-y divide-gray-100 rounded-lg shadow w-[350px]">
              <ul class="py-1 text-sm flex justify-between flex-wrap text-gray-700 ">
              {
                  typecommercial.map((item, index) => {
                    if(item=='Other Commercial'){
                      return  <li className='w-100' key={index}>
                                <button  onClick={()=>{commercialValue(item);commercialToggle()}} class="block px-2 w-full text-gray-700 py-2 hover:bg-gray-200 ">{item}</button>
                              </li>
                    }
                    return  <li className='w-50' key={index}>
                              <button  onClick={()=>{commercialValue(item);commercialToggle()}} class="block px-2 w-full text-gray-700 py-2 hover:bg-gray-200 ">{item}</button>
                            </li>
                  })
                }
              </ul>
            </div>
        </div>  
        <div id='residential-list'  hidden={usage=="Commercial"}>
            <button id="residentialdropdown"   onClick={()=>{residentialToggle()}} class="text-gray-700 w-[187px] relative bg-white border-2 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  " type="button"> {residential ? residential : "Residential Type" } 
              <svg class="w-2.5 h-2.5 absolute top-4 right-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div id="residential"  class="z-10 mt-1 absolute hidden max-h-40 overflow-scroll bg-white divide-y divide-gray-100 rounded-lg shadow w-[350px]">
              <ul class="py-1 text-sm flex justify-between flex-wrap text-gray-700 ">
              {
                  typeresidential.map((item, index) => (
                    <li className='w-50' key={index}>
                      <button  onClick={()=>{residentialValue(item);residentialToggle()}} class="block px-2 w-full text-gray-700 py-2 hover:bg-gray-200 ">{item}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
        </div> 
        <div className='relative'>
            <button id="areadropdown"   onClick={()=>{areaToggle()}} class="text-gray-700 relative bg-white border-2 w-44 border-gray-500 focus:bg-[#398378] focus:border-[#398378] focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center" type="button">{(minarea&&maxarea)?"from "+minarea+" to "+maxarea:(minarea>0)?"from "+minarea:(maxarea>0)?"up to "+maxarea:"Area" }
              <svg class="w-2.5 h-2.5 absolute top-4 right-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div id="area"  class="z-10 absolute top-12 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <div className='flex gap-x-3 py-4 px-3 rounded-lg bg-white'>
                <input type='text' onChange={handleMinarea} value={minarea} id='min'  placeholder='Min. area' className='py-2 px-2 focus:ring-0 rounded-lg w-44 border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
                _
                <input type="text" id='max' onChange={handleMaxarea} value={maxarea} placeholder='Max. area' className='py-2 px-2 focus:ring-0 rounded-lg w-44 border-2 border-gray-500 focus:outline-none focus:border-[#398378]' />
              </div>
            </div>
        </div> 
        <button onClick={()=>{findProperty()}} className='py-2 px-4 w-[187px] text-white bg-[#398378] rounded-lg font-medium hover:bg-[#31C48D]'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
      </div>
    </div>      
  </div>
</div>
<div className='w-screen mt-52'>
  <div className='container px-6 py-10'>
    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Newest Property </h1>
    <p class="max-w-2xl mx-auto my-6   text-center text-gray-500 ">5
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
    </p>
    <div className='grid sm:ms-5 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-6'>
    {
      properties?.map((property,index)=>{

        return <Cart properties={property}/>

      })
    }
    </div>
  </div>
</div>
<ContactUs/>
  </>
}
