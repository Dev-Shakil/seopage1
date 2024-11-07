import React from 'react'

const HeaderTop = () => {
  return (
    <div className="bg-[#F0F1F1] text-gray-600 py-1 text-sm">
    <div className="flex  justify-between mx-auto w-[95%] md:w-[90%] lg:w-[85%] ">
        <div>
            <ul className="flex gap-x-6 list-none">
                <li>Language</li>
                <li>Help Center</li>
                <li>Helpline : 0964781656</li>
            </ul>
        </div>
        <div>
            <ul className="flex list-none gap-x-6">
                <li>Become a Seller</li>
                <li>Order Track</li>
                <li className="text-[#F97316]">Sign Up / Login</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default HeaderTop