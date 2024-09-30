import React from 'react'
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import profileImg from '../../assets/Images/profile.png'

const rowData = [
    {
        id: '#123456',
        name: 'Sushant Sharma',
        profileImg: profileImg,
        date: '9/01/24',
        subscription: 'Sub-123456',
        amount: '₹ 4500',
        status: 'Paid'
    },
    {
        id: '#654321',
        name: 'Aman Sharma',
        profileImg: profileImg,
        date: '09/02/24',
        subscription: 'Sub-654321',
        amount: '₹ 3200',
        status: 'Pending'
    },
    {
        id: '#789101',
        name: 'Mohan pal',
        profileImg: profileImg,
        date: '09/03/24',
        subscription: 'Sub-789101',
        amount: '₹ 5500',
        status: 'Paid'
    },
    {
        id: '#121314',
        name: 'Parul Rawat',
        profileImg: profileImg,
        date: '09/04/24',
        subscription: 'Sub-121314',
        amount: '₹ 2900',
        status: 'Cancelled'
    },
    {
        id: '#151617',
        name: 'David Brown',
        profileImg: profileImg,
        date: '09/05/24',
        subscription: 'Sub-151617',
        amount: '₹ 4200',
        status: 'Paid'
    },
    {
        id: '#181920',
        name: 'Sarah Wilson',
        profileImg: profileImg,
        date: '09/06/24',
        subscription: 'Sub-181920',
        amount: '₹ 4800',
        status: 'Pending'
    },
    {
        id: '#212223',
        name: 'Virat Kohli',
        profileImg: profileImg,
        date: '09/07/24',
        subscription: 'Sub-212223',
        amount: '₹ 5100',
        status: 'Paid'
    },
];

const Table = () => {
    return (
        <div className='bg-white mt-10 mx-5'>
            <div className='border border-black'>
                <div className='flex justify-between border border-gray-300 list-none px-10 py-5 text-lg font-semibold'>
                    <div className='flex gap-10'>
                        <li>Transaction</li>
                        <li>See History</li>
                    </div>
                    <div className='flex gap-10'>
                        <li>Paid</li>
                        <li>Pending</li>
                        <li>All</li>
                    </div>
                </div>
                <table className='border w-full border-black'>
                    <thead>
                        <tr>
                            <th className='text-start px-8 py-2'>Invoice</th>
                            <th className='text-start px-8 py-2'>Customer</th>
                            <th className='text-start px-8 py-2'>Date</th>
                            <th className='text-start px-8 py-2'>Ref</th>
                            <th className='text-start px-8 py-2'>Amount</th>
                            <th className='text-start px-8 py-2'>Status</th>
                            <th className='text-start px-8 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowData.map((row) => (
                            <tr key={row.id} className='border border-gray-300'>
                                <td className='text-start px-8 py-2 text-green-500 font-semibold'>{row.id}</td>
                                <td className='text-start px-8 py-2 flex items-center font-semibold'>
                                    <img className='rounded-full h-8 w-8 mr-2' src={row.profileImg} alt="Profile Image" />
                                    {row.name}
                                </td>
                                <td className='text-start px-8 py-2 font-semibold'>{row.date}</td>
                                <td className='text-start px-8 py-2 text-green-500 font-semibold'>{row.subscription}</td>
                                <td className='text-start px-8 py-2 font-semibold'>{row.amount}</td>
                                <td className={`text-start px-8 py-2 font-semibold ${row.status === 'Paid' ? 'text-green-500' : row.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>{row.status}</td>
                                <td className='text-start px-8 text-green-500 cursor-pointer py-2 font-semibold'><PiDotsThreeOutlineVerticalBold /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
