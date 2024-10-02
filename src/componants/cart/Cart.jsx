import React from 'react'
import profile from '../../assets/profile-photo.jpg'
export default function Cart() {
return <>
<div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <div class="relative  overflow-hidden rounded-xl rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"alt="ui/ux review check"/>
        {/* <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60">dsffdvdfv</div> */}
            <button class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"type="button"data-ripple-dark="true">
                <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-8 w-8"
                        >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                    </svg>
                </span>
            </button>
        </div>
    <div class="p-6">
        <div class="mb-3 flex flex-col justify-between">
            <div className='flex justify-between'>
                <div>
                    <h6 class="block font-sans text-sm font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">villa</h6>
                    <h2 class="block font-sans text-2xl pb-3 font-bold leading-snug tracking-normal text-black antialiased">EGP 151651651</h2>

                </div>
                <div className='w-1/5'>
                    <img src={profile} className='' alt="logo" />
                </div>
            </div>

            <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">Wooden House, Florida</h5>
        </div>
        <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Enter a freshly updated and thoughtfully furnished peaceful homesurrounded by ancient trees, stone walls, and open meadows.</p>
        <div class="group mt-8 inline-flex flex-wrap items-center gap-3">
            <span
                data-tooltip-target="money"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>
            <span
                data-tooltip-target="wifi"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >
            </span>
   
            <span
                data-tooltip-target="bedrooms"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>

            <span
                data-tooltip-target="tv"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>
            <span
                data-tooltip-target="fire"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>
            <span
                data-tooltip-target="more"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >
            </span>
        </div>
    </div>
    <div class="p-3 pt-3 flex gap-1">
        <button
            class="block w-full select-none rounded-lg bg-[#398378] py-1 text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            <i class="fa-solid fa-envelope"></i>
        </button>
        <button
            class="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            <i class="fa-solid fa-phone"></i>
        </button>
        <button
            class="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </button>
    </div>
</div>
<div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <div class="relative overflow-hidden rounded-xl rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"alt="ui/ux review check"/>
        {/* <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60">dsffdvdfv</div> */}
            <button class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"type="button"data-ripple-dark="true">
                <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-8 w-8"
                        >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                    </svg>
                </span>
            </button>
        </div>
    <div class="p-6">
        <div class="mb-3 flex flex-col justify-between">
            <div className='flex justify-between'>
                <div>
                    <h6 class="block font-sans text-sm font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">villa</h6>
                    <h2 class="block font-sans text-2xl pb-3 font-bold leading-snug tracking-normal text-black antialiased">EGP 151651651</h2>

                </div>
                <div className='w-1/5'>
                    <img src={profile} className='' alt="logo" />
                </div>
            </div>

            <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">Wooden House, Florida</h5>
        </div>
        <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">Enter a freshly updated and thoughtfully furnished peaceful homesurrounded by ancient trees, stone walls, and open meadows.</p>
        <div class="group mt-8 inline-flex flex-wrap items-center gap-3">
            <span
                data-tooltip-target="money"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>
            <span
                data-tooltip-target="wifi"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >
            </span>
   
            <span
                data-tooltip-target="bedrooms"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>

            <span
                data-tooltip-target="tv"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>
            <span
                data-tooltip-target="fire"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >

            </span>
            <span
                data-tooltip-target="more"
                class="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >
            </span>
        </div>
    </div>
    <div class="p-3 pt-3 flex gap-1">
        <button
            class="block w-full select-none rounded-lg bg-[#398378] py-1 text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            <i class="fa-solid fa-envelope"></i>
        </button>
        <button
            class="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            <i class="fa-solid fa-phone"></i>
        </button>
        <button
            class="block w-full select-none rounded-lg bg-[#398378] text-center align-middle font-sans text-2xl font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#398378] hover:bg-[#31C48D] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </button>
    </div>
</div>

</>
}
