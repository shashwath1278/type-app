import React from 'react'
import {FaRegClock} from 'react-icons/fa'
import { useState,useEffect } from 'react';

const Tum = ({timeLeft,onTimeUp}) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const time = setTimeout(() => onTimeUp(timeLeft - 1), 1000);
      return () => clearTimeout(time);
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div className='flex gap-2 items-center font-medium'>
       <FaRegClock/>
       <p className ="text-blue-600"> Time Left: {timeLeft} scs</p>
       
    </div>
  )
}

export default Tum
