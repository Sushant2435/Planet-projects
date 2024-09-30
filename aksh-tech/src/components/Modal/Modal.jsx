import React from 'react'

const MedicineDetails = ({ closeModal }) => {
    return (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white py-8 rounded-lg shadow-lg w-full max-w-4xl h-auto">
                <h2 className="text-3xl font-semibold mb-4 text-center">Medicine Details</h2>
                <div className='bg-green-100 text-green-700 text-center md:text-start px-6 py-3 text-lg font-semibold'>
                    Medicine Information
                </div>
                <div className='flex flex-col text-center  md:text-start md:flex-row px-4 md:px-10 mt-4'>
                    <div className='flex flex-col w-full md:w-2/3 gap-6 md:gap-14'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div>
                                <h4 className='text-gray-600 font-semibold text-lg'>Name</h4>
                                <p>SFSDFDFDSFSFAE 500MG TAB.</p>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <h4 className='text-gray-600 font-semibold text-lg'>Generic Name</h4>
                                <p>Azithromycin</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div>
                                <h4 className='text-gray-600 font-semibold text-lg'>Weight</h4>
                                <p>500mg</p>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <h4 className='text-gray-600 font-semibold text-lg'>Expire Date</h4>
                                <p>19/12/2020</p>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <h4 className='text-gray-600 font-semibold text-lg'>Type</h4>
                                <p>Tablet</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 mt-6 md:mt-0 md:ml-14 flex justify-center'>
                        <img src="{MedicineImg}" alt="medicine image" className='h-44 w-44 object-cover' />
                    </div>
                </div>
                <div className='bg-green-100 text-green-700 px-6 py-3 my-4 text-lg font-semibold flex justify-around'>
                    <div>Stock</div>
                    <div>Estimate</div>
                </div>
                <div className='flex mx-10'>
                    <div className='flex-1 flex flex-col items-center md:items-start gap-6 md:gap-10'>
                        <div className='flex flex-col md:flex-row md:gap-16'>
                            <div>
                                <h4 className='text-gray-600 font-semibold text-lg'>Total Stock</h4>
                                <p>2130 box</p>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <h4 className='text-gray-600 font-semibold text-lg'>Current Stock</h4>
                                <p>130 box</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-gray-600 font-semibold text-lg'>Stock Status</h4>
                            <p>Available</p>
                        </div>
                    </div>
                    <div className='border-l-2 border-green-700 h-auto md:h-44 my-4 md:my-0 md:mx-4'></div>
                    <div className='flex-1 flex flex-col items-center md:items-start lg-items-start gap-6 md:gap-10'>
                        <div className='flex flex-col md:flex-row md:gap-16'>
                            <div>
                                <h4 className='text-gray-600 font-semibold text-lg'>Manufactur Price</h4>
                                <p>130 Rs</p>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <h4 className='text-gray-600 font-semibold text-lg'>Selling Price</h4>
                                <p>230 box</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-gray-600 font-semibold text-lg'>Wholesale Price</h4>
                            <p>200 Rs</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MedicineDetails;
