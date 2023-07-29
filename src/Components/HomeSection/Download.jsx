import React from 'react'
import { FaCheck } from 'react-icons/fa'
import Appstore from "../../assets/images/download2.jpg"
import Google from "../../assets/images/download1.png"
import Phone from "../../assets/images/download3.png"

const Download = () => {
  return (
    <div className='w-full  sm:h-[450px] h-[700px] bg-Header text-white px-5 sm:px-10 lg:px-20 py-4 mb-32 overflow-hidden'>
        <div className=' flex flex-col sm:flex-row  gap-1'>
            <div className='600 sm:w-1/2'>
                <h5>Download our app</h5>
                <h1 className='text-3xl mb-4'>Get our Template App <br /> <span>For Your Mobile</span></h1>
                <div className='space-y-1'>
                    <p className='flex items-center text-lg '><FaCheck className='w-3 h-2' /><span>Find nearby hotel in your network with template</span></p>
                    <p className='flex items-center text-lg '><FaCheck className='w-3 h-2' /><span>Get paperless confirmation</span></p>
                    <p className='flex items-center text-lg '><FaCheck className='w-3 h-2' /><span>Make changes whenever, wherever</span></p>
                    <p className='flex items-center text-lg '><FaCheck className='w-3 h-2' /><span>24/7 customer service in more than 40 languages</span></p>
                    <p className='flex items-center text-lg '><FaCheck className='w-3 h-2' /><span>No booking or credit card fees</span></p>
                    <p className='flex items-center text-lg '><FaCheck className='w-3 h-2' /><span>Add your own reviews and photos</span></p>
                </div>
                <div className='flex items-center gap-2 py-3'>
                    <img src={Appstore} alt=""  className='w-28 h-8 object-cover'/>
                    <img src={Google} alt="" className='w-28 h-8 object-cover'/>
                </div>
            </div>
            <div className='sm:w-1/2 py-0'>
                <img src={Phone} alt="" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Download