import React from 'react'
import { Carousel } from 'flowbite-react'

const Camp = () => {
  return (
    <div className="newd h-56 sm:h-64 xl:h-80 2xl:h-96 md:pt--2">
       <Carousel slideInterval={5000}>
        <img src="/public/img1.jpg"  alt="..." />
        <img src="/public/img2.webp" alt="..." />
        <img src="/public/img3.jpg" alt="..." />
        
      </Carousel>
    </div>
  )
}

export default Camp
