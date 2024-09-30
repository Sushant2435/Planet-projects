import React, { useState } from 'react';
import MedicineImg from '../../assets/Images/medicine.png'

const Abcd = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                Open Modal
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white py-8 rounded-lg shadow-lg w-[800px] h-auto ">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Medicine Details</h2>
                        <div className='bg-green-100 text-green-700 px-10 py-4 text-lg font-semibold'>Medicine Information</div>
                        <div className='flex px-10 mt-4'>
                            <div className='flex flex-col w-2/3 gap-14'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Name</h4>
                                        <p>SFSDFDFDSFSFAE 500MG TAB.</p>
                                    </div>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Generic Name</h4>
                                        <p>Azithromycin</p>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Weight</h4>
                                        <p>500mg</p>
                                    </div>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Expire Date</h4>
                                        <p>19/12/2020</p>
                                    </div>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Type</h4>
                                        <p>Tablet</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/3 ml-14'>
                                <img src={MedicineImg} alt="medicine image" className='h-44 w-44' />
                            </div>
                        </div>
                        <div className='bg-green-100 text-green-700 px-10 py-4 my-4 text-lg font-semibold flex justify-around'>
                            <div>Stock</div>
                            <div>Estimate</div>
                        </div>
                        <div className='flex mx-10'>
                            <div className='flex-1 flex flex-col gap-10'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Total Stock</h4>
                                        <p>2130 box</p>
                                    </div>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Current Stock</h4>
                                        <p>130 box</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-gray-600 font-semibold text-lg'>Stock Status</h4>
                                    <p>Available</p>
                                </div>
                            </div>
                            <div className='border-l-2 border-green-700 h-44 mx-4'></div>
                            <div className='flex-1 flex flex-col gap-10'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h4 className='text-gray-600 font-semibold text-lg'>Manufactur Price</h4>
                                        <p>130 Rs</p>
                                    </div>
                                    <div>
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
            )}
        </div>
    );
};

export default Abcd;

