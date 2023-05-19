import React from 'react'
import bag from "../assets/bag.png"
import call from "../assets/call.png"
import heart from "../assets/heart.png"
import profile from "../assets/profile.png"
import search from "../assets/search.png"
import vector from "../assets/Vector.png"

const Navbar = () => {
  return (
    <div>

        <div className='bg-[#1f1f1f]'>
            <div className='max-w-[1060px] flex justify-between mx-auto items-center'>
                <p className='text-white text-[14px] p-3'>Welcome to Our Store Hiscraves</p>
                <div className='flex gap-2'>
                    <img src={call} alt="" className='h-[18px] w-[18px]' />
                    <p className='text-white text-[14px]'>Call Us: 1234567890</p>
                </div>
            </div>
        </div>

        <div className='bg-white shadow-md'>
            <div className='max-w-[1060px] min-h-[88px] flex justify-between items-center mx-auto p-4'>
                <img src={vector} alt="" />
                <p className='font-[16px] cursor-pointer'>Logo Here</p>
                <div className='flex gap-7 max-w-[300px]'>
                    <img src={search} alt="" className='cursor-pointer'/>
                    <img src={heart} alt="" className='cursor-pointer'/>
                    <img src={bag} alt="" className='cursor-pointer'/>
                    <img src={profile} alt=""className='cursor-pointer' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar;