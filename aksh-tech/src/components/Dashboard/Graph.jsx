import React from 'react';
import SalesChart from './Chart';

const Graph = () => {
    return (
        <div className='flex pt-10'>
            {/* Container for the information */}
            <div className='flex flex-col gap-7 w-1/3 p-4'>
                <div>
                    <li className='font-semibold'>Overall Sales</li>
                    <p className='font-bold'>12 Millions</p>
                </div>
                <div>
                    <li className='font-semibold'>Overall Earning</li>
                    <p className='font-bold'>78 Millions</p>
                </div>
                <div>
                    <li className='font-semibold'>Overall Revenue</li>
                    <p className='font-bold'>60 Millions</p>
                </div>
                <div>
                    <li className='font-semibold'>New Customer</li>
                    <p className='font-bold'>23K</p>
                </div>
                <button className='bg-blue-500 px-5 py-2 rounded-xl text-white'>View Reports</button>
            </div>

            {/* Container for the chart */}
            <div className='w-2/3 p-4'>
                <SalesChart />
            </div>
        </div>
    );
}

export default Graph;
