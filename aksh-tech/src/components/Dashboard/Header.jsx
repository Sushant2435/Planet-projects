import React from 'react'
import { RiFileAddLine } from "react-icons/ri";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div>
                <h2 className='text-2xl font-bold'>Dashboard</h2>
                <div className='text-lg mt-2'>Welcome to Pharmacy Dashboard</div>
            </div>
            <div>
                <div className='text-purple-500 text-2xl font-bold '>Hello👋 Admin</div>
                <div className='mt-2 flex gap-4'>
                    <input type="date" className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin' />
                    <div className='flex items-center shadow-lg py-2 px-4 bg-green-500 rounded-lg text-semibold text-white font-semibold'>
                        <span className='mr-4'><RiFileAddLine className='w-6 h-6 font-semibold' /></span>
                        <button className=''>Report</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
