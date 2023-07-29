import React from 'react'
import Error from "../assets/images/404.webp"

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center w-full h-full py-24'>
       <img src={Error} alt='404' />
    </div>
  )
}

export default PageNotFound