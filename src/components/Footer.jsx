import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#263238] flex justify-between">
        <div
          class="left"
          className="flex flex-col items-center gap-8 ml-48 my-10"
        >
          <img src="./Logo2.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-[#F5F7FA] ">Copyright © 2025.</span>
            <span className="text-[#F5F7FA] ">All rights reserved</span>
          </div>
          <img src="./SocialLinks.svg" alt="" className="cursor-pointer"/>
        </div>
        <div class="right" className="grid grid-cols-3 my-10 mr-48">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-semibold">Company</h1>
            <div className="flex flex-col gap-2">
              <span className="text-[#F5F7FA]">About us</span>
              <span className="text-[#F5F7FA]">Blog</span>
              <span className="text-[#F5F7FA]">Contact us</span>
              <span className="text-[#F5F7FA]">Pricing</span>
              <span className="text-[#F5F7FA]">Testimonials</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-semibold">Support</h1>
            <div className="flex flex-col gap-2 ">
              <span className="text-[#F5F7FA]">Help center</span>
              <span className="text-[#F5F7FA]">Terms of service</span>
              <span className="text-[#F5F7FA]">Legal</span>
              <span className="text-[#F5F7FA]">Privacy policy</span>
              <span className="text-[#F5F7FA]">Status</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-semibold">Stay up to date</h1>
            <div className="relative">
              <input type="text" placeholder="Your email address" className="rounded bg-transparent border py-2 pl-2 text-sm"/>
              <img src="./send.svg" alt="" className="absolute top-3 right-3 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
