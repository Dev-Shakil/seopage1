import Image from 'next/image'
import React from 'react'
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from 'next/link';
const HeaderBottom = () => {
  return (
    <div className="bg-white shadow-sm ">
    <div className="flex bg-white justify-between items-center px-4 py-1 lg:w-[65%] w-[90%] gap-x-6 mx-auto">
        <Image src="/alzaf_logo.png" alt="logo" height="30" width="100" />
        <div className="relative text-gray-700 w-[50%]">
        <input className=" bg-[#EFF0F5] outline-none px-3 py-2 w-full rounded-xl" placeholder="Search Product" />
        <button className="absolute right-0 bg-[#F97316] p-2.5 text-xl rounded-xl text-white font-bold"><CiSearch className="text-white font-semibold"/></button>
        </div>
        <div className="flex gap-x-5 items-center">
            <Link href="#" className="px-2 text-gray-500 text-lg font-extralight py-2 rounded-xl bg-[#EFF0F5]"><FaRegUser /></Link>
            <Link href="#" className="px-2 text-gray-500 py-2 text-lg rounded-xl bg-[#EFF0F5]"><CiHeart /></Link>
            <Link href="#" className="px-2 text-gray-500 py-2 text-lg rounded-xl bg-[#EFF0F5]"><PiShoppingCartLight /></Link>
        </div>
        <Image src="/cloud.png" alt="logo" height="70" width="190" />
    </div>
    </div>
  )
}

export default HeaderBottom