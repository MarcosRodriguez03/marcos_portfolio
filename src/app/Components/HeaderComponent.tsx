import Image from 'next/image'
import React from 'react'
import Headshot from '../Assets/Marcos_Rodriguez_01_CSAS6_Headshots.jpg'
import Test from '../Assets/Test.webp'

const HeaderComponent = () => {
  return (
    <div className='flex justify-between mb-[20px] mt-[80px] lg:px-8'>
      <div className='text-black'>
        <p className='text-[52px] font-bold text-white'>Marcos Rodriguez</p>
        <p className='text-[34px] text-[#ffc300]'>Software Engineer based in California</p>
      </div>

      <div className='bg-white  w-fit h-fit'>
        <Image src={Test} alt='Marcos Headshot' className='h-[150px] w-[150px] rounded-[100px]' />
      </div>
    </div>
  )
}

export default HeaderComponent
