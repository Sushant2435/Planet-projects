import React from 'react'

const GraphHeader = () => {
    return (
        <div>
            <ul className='flex justify-end gap-4'>
                <li className='hover:bg-green-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-3xl'>Today</li>
                <li className='hover:bg-green-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-3xl'>Yesterday</li>
                <li className='hover:bg-green-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-3xl'>7 days</li>
                <li className='hover:bg-green-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-3xl'>15 days</li>
                <li className='hover:bg-green-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-3xl'>30 days</li>
            </ul>
        </div>
    )
}

export default GraphHeader
