import React from 'react'
import banner from "../assets/banner.png";
import Ellipse7 from "../assets/Ellipse7.png"
import Ellipse8 from "../assets/Ellipse8.png";
import Ellipse9 from "../assets/Ellipse 9.png"
import Ellipse10 from "../assets/Ellipse10.png"
import Ellipse11 from "../assets/Ellipse11.png"
import Ellipse12 from "../assets/Ellipse12.png";
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import rectangle3 from "../assets/Rectangle3.png"
import rectangle4 from "../assets/Rectangle4.png"
import rectangle5 from "../assets/Rectangle5.png"
import rectangle6 from "../assets/Rectangle6.png"
import heart2 from "../assets/heart2.png";
import basket from "../assets/basket.png"
import share from "../assets/share.png"
import banner2 from "../assets/banner2.png"
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person1.png"
import person4 from "../assets/person4.png"
import person5 from "../assets/person5.png"
import person6 from "../assets/person6.png"
import banner3 from "../assets/banner3.png"
import group from "../assets/group.png"

const MainBody = () => {
  return (
    <div>


        <div>
            <img src={banner} alt="" className='w-full h-[632px] '/>
        </div>

        
        <div className='flex max-w-[1080px] mx-auto justify-between my-10 py-4 flex-wrap'>
            <div className='flex flex-col items-center'>
                <img src={Ellipse7} alt="" className='bg-[#F1DBE9] rounded-full'/>
                <p className='font-[16px] py-4'>Men’s T-Shirts</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={Ellipse8} alt="" className='bg-[#DDD3EB] rounded-full'/>
                <p className='font-[16px] py-4'>Women’s Wear</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={Ellipse9} alt="" className='bg-[#D3EAEB] rounded-full'/>
                <p className='font-[16px] py-4'>Winter Collections</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={Ellipse10} alt="" className='bg-[#EFF1D9] rounded-full'/>
                <p className='font-[16px] py-4'>Hooded T-Shirts</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={Ellipse11} alt="" className='bg-[#F1DADB] rounded-full'/>
                <p className='font-[16px] py-4'>Polo Neck T-Shirts</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={Ellipse12} alt="" className='bg-[#D9F1DE] rounded-full'/>
                <p className='font-[16px] py-4'>Full Sleeves T-Shirts</p>
            </div>
        </div>


        <div className='max-w-[1080px] mx-auto p-2 mb-10'>
            <div className='flex justify-center gap-4 mb-4'>
                <div className='break-inside-avoid'>
                    <img src={image2} alt="" />
                </div>
                <div className='break-inside-avoid'>
                    <img src={image3} alt="" className=''/>  
                </div>
            </div>
            <div className='flex justify-center gap-4 mb-4'>
                <div className='break-inside-avoid'>
                    <img src={image4} alt="" />
                </div>
                <div className='break-inside-avoid'>
                    <img src={image5} alt="" />   
                </div>
                <div className='break-inside-avoid'>
                    <img src={image6} alt="" />
                </div>
            </div>
        </div>

        

        <div className='max-w-[1080px] mx-auto flex flex-col items-center justify-center'>
            
            <div class="flex items-center  p-2 m-2">
                <div class="flex-grow border-t-2 border-r-2"></div>
                <h1 class="mx-4 text-3xl">Trending T-Shirts</h1>
                <div class="flex-grow border-t-2 border-l-2"></div>
            </div>
            
            <div className='grid grid-cols-4 gap-2 mt-8'>
            <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle3} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>
                
                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle4} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>





                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle5} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle6} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>



                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle3} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>
                
                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle4} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>





                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle5} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle6} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>
            </div>
            <button className='my-6 bg-[#770015] px-9 py-2 text-white'>
                View All
            </button>
        </div>

        <div className='my-8'>
            <img src={banner2} alt="" className='w-full h-[500px] '/>
        </div>
        

        <div className='max-w-[1080px] mx-auto flex flex-col items-center justify-center my-6'>
            
            <div class="flex items-center  p-2 m-2">
                <div class="flex-grow border-t-2 border-r-2"></div>
                <h1 class="mx-4 text-3xl">Best Selling Products</h1>
                <div class="flex-grow border-t-2 border-l-2"></div>
            </div>


            
            <div className='grid grid-cols-4 gap-2 mt-8'>
            <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle3} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>
                
                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle4} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>





                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle5} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle6} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>
            </div>
            <button className='my-6 bg-[#770015] px-9 py-2 text-white'>
                View All
            </button>
        </div>




        <div className='max-w-[1080px] mx-auto flex flex-col items-center justify-center my-6'>
            
            <div class="flex items-center  p-2 m-2">
                <div class="flex-grow border-t-2 border-r-2"></div>
                <h1 class="mx-4 text-3xl">Trending T-Shirts</h1>
                <div class="flex-grow border-t-2 border-l-2"></div>
            </div>


            
            <div className='grid grid-cols-4 gap-2 mt-8'>
            <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle3} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>
                
                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle4} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>





                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle5} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className="relative group">
                        <img src={rectangle6} alt="" className="transition duration-500 ease-in-out cursor-pointer blur-none group-hover:blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center space-x-8 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <button>
                            <img src={basket} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={heart2} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        <button>
                            <img src={share} alt="" className='p-4 bg-white rounded-full'/>
                        </button>
                        </div>
                    </div>
                    <p>Men Henley Neck</p>
                    <p>Full Sleeve Red Wine</p>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-xl font-bold'>399</p>
                        <span className="relative">
                        <span className="line-through text-[12px]">₹1299</span>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-red-400"></span>
                        </span>
                    </div>
                    <div className='flex justify-around w-full gap-2 p-2'>
                        <button className='px-2 py-1 border'>S</button>
                        <button className='px-2 py-1 border'>M</button>
                        <button className='px-2 py-1 border'>L</button>
                        <button className='px-2 py-1 border'>XL</button>
                        <button className='px-2 py-1 border'>XXL</button>
                    </div>
                </div>
            </div>
            <button className='my-6 bg-[#770015] px-9 py-2 text-white'>
                View All
            </button>
        </div>


        <div className='max-w-[1080px] mx-auto p-2 my-6'>
            <div className='grid grid-cols-3 gap-3'>
                <div class="relative cursor-pointer">
                    <img src={person1} alt='' className='bg-[#05b8a6] '/>
                    <div class="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-center py-4 transition backdrop-filter backdrop-blur-md ">
                        <h1 class="relative z-10">Streetwear Collections</h1>
                    </div>
                </div>

                <div class="relative cursor-pointer">
                    <img src={person2} alt='' className='bg-[#80e8ff]'/>
                    <div class="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-center py-4 transition backdrop-filter backdrop-blur-md">
                        <h1 class="relative z-10">Streetwear Collections</h1>
                    </div>
                </div>

                <div class="relative cursor-pointer">
                    <img src={person3} alt='' className='bg-[#dc493a]'/>
                    <div class="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-center py-4 transition backdrop-filter backdrop-blur-md">
                        <h1 class="relative z-10">Streetwear Collections</h1>
                    </div>
                </div>

                <div class="relative cursor-pointer">
                    <img src={person4} alt='' className='bg-[#88ff]'/>
                    <div class="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-center py-4 transition backdrop-filter backdrop-blur-md">
                        <h1 class="relative z-10">Streetwear Collections</h1>
                    </div>
                </div>

                <div class="relative cursor-pointer">
                    <img src={person5} alt='' className='bg-[#f0bc8c]'/>
                    <div class="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-center py-4 transition backdrop-filter backdrop-blur-md">
                        <h1 class="relative z-10">Streetwear Collections</h1>
                    </div>
                </div>

                <div class="relative cursor-pointer">
                    <img src={person6} alt='' className='bg-[#4392f1]'/>
                    <div class="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-center py-4 transition backdrop-filter backdrop-blur-md">
                        <h1 class="relative z-10">Streetwear Collections</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className='my-8'>
            <img src={banner3} alt="" className='w-full h-[500px] '/>
        </div>

        <div className='mx-auto max-w-[1080px] m-5 p-2 cursor-pointer'>
            <img src={group} alt="" />
        </div>

    
    </div>
  )
}

export default MainBody;