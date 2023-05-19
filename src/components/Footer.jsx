import React from 'react'
import fb from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import ig from "../assets/ig.png"
import linkedIn from "../assets/linkedIn.png"
import pn from "../assets/pn.png"
import call2 from "../assets/call2.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"

const Footer = () => {
  return (
    <div>
       <hr class="border-gray-300 border-solid border-t-2 mx-4"/>

        <div className='flex items-start justify-around w-10/12 mx-auto space-x-4 space-y-4'>
            <div className='flex max-w-[260px] flex-col my-3 justify-between'>
                <p className='my-3 text-sm text-grayText font-mullish'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
                </p>
                <div className='flex items-center justify-start gap-2'>
                    <img src={fb} alt="" />
                    <img src={twitter} alt="" />
                    <img src={ig} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={pn} alt="" />
                </div>
            </div>

            <div className='flex justify-between space-x-10'>
                <div>
                    <p className='mb-1 font-bold uppercase font-mullish text-[#770015]'>ONLINE SHOPPING</p>
                    <ul className='space-y-2'>
                        <li className='font-medium'>Men's T-shirt</li>
                        <li className='font-medium'>Women's Wear</li>
                        <li className='font-medium'>Winter Collection</li>
                        <li className='font-medium'>Hooded T-shirts</li>
                        <li className='font-medium'>Sweatwear Collections</li>
                    </ul>
                </div>

                <div>
                    <p className='mb-1 font-bold uppercase font-mullish text-[#770015]'>CUSTOMER POLICIES</p>
                    <ul className='space-y-2'>
                        <li className='font-medium'>About Us</li>
                        <li className='font-medium'>Terms & Conditions</li>
                        <li className='font-medium'>Shipping & return policy</li>
                        <li className='font-medium'>Cancellation & refund policy</li>
                        <li className='font-medium'>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <p className='mb-1 font-bold uppercase font-mullish text-[#770015]'>STORE INFORMATION</p>
                    <ul className='space-y-2'>
                        <div className='flex space-x-2'>
                            <img src={location} alt="" loading='lazy' width="24px" height="24px"/>
                            <div className='flex flex-col'>
                            <p>Lorem Ipsum is simply dummy text of the </p>
                            <p> printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <img src={call2} alt="" />
                            <p>Call Us: 1234567890</p>
                        </div>
                        <div className='flex space-x-2'> 
                            <img src={mail} alt="" />
                            <p>Email Us: info@yourmail.com</p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer