import React, { useState, useMemo } from 'react';
import MedicineImg from '../../assets/Images/medicine.png';
import profileImg from '../../assets/Images/profile.png';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const medicineList = [
    {
        orderNumber: "#DSSD23",
        productid: "#21342443",
        category: "Tablet",
        item: "Omidon 10mg",
        quantity: "10pcs",
        price: "$20",
        saleprice: "$18",
        address: "2462 Royal Ln, Mesa, New Jersey",
        image: MedicineImg,
    },
    {
        orderNumber: "#XSSK98",
        productid: "#56473829",
        category: "Capsule",
        item: "Panadol Extra",
        quantity: "20pcs",
        price: "$30",
        saleprice: "$25",
        address: "9876 Maple St, Springfield, Illinois",
        image: profileImg,
    },
    {
        orderNumber: "#KJH452",
        productid: "#98765432",
        category: "Syrup",
        item: "Cough Syrup 150ml",
        quantity: "1 bottle",
        price: "$15",
        saleprice: "$12",
        address: "4321 Oakwood Ave, Austin, Texas",
        image: MedicineImg,
    },
    {
        orderNumber: "#MN2345",
        productid: "#34568790",
        category: "Injection",
        item: "Insulin 50ml",
        quantity: "5 vials",
        price: "$100",
        saleprice: "$85",
        address: "256 Elm St, Denver, Colorado",
        image: profileImg,
    },
    {
        orderNumber: "#UIO983",
        productid: "#98712345",
        category: "Ointment",
        item: "Neosporin 20g",
        quantity: "2 tubes",
        price: "$12",
        saleprice: "$10",
        address: "543 Oak St, Boston, Massachusetts",
        image: MedicineImg,
    },
    {
        orderNumber: "#KLJ342",
        productid: "#54398765",
        category: "Tablet",
        item: "Ibuprofen 200mg",
        quantity: "30pcs",
        price: "$25",
        saleprice: "$20",
        address: "764 Cedar St, Miami, Florida",
        image: profileImg,
    },
    {
        orderNumber: "#WER123",
        productid: "#12093487",
        category: "Drop",
        item: "Eye Drops 10ml",
        quantity: "2 bottles",
        price: "$18",
        saleprice: "$15",
        address: "456 Pine St, San Diego, California",
        image: MedicineImg,
    },
    {
        orderNumber: "#POI764",
        productid: "#37482729",
        category: "Tablet",
        item: "Paracetamol 500mg",
        quantity: "50pcs",
        price: "$22",
        saleprice: "$20",
        address: "678 Spruce St, Seattle, Washington",
        image: profileImg,
    },
    {
        orderNumber: "#ZXCV90",
        productid: "#64583927",
        category: "Powder",
        item: "ORS 21g",
        quantity: "10 packets",
        price: "$8",
        saleprice: "$6",
        address: "123 Willow St, Houston, Texas",
        image: MedicineImg,
    },
    {
        orderNumber: "#QAZ098",
        productid: "#09876543",
        category: "Tablet",
        item: "Aspirin 100mg",
        quantity: "100pcs",
        price: "$35",
        saleprice: "$30",
        address: "910 Palm St, Orlando, Florida",
        image: profileImg,
    }
];
const NewMedicine = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(Math.floor(medicineList.length / 2));

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const selectedProduct = useMemo(() => medicineList[currentIndex], [currentIndex]);

    const slideLeft = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const slideRight = () => {
        if (currentIndex < medicineList.length - 1) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                Open Modal
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white py-8 rounded-lg shadow-lg w-[800px] h-auto border-2 border-black">
                        <div className="flex justify-center">
                            <div className="w-1/2 flex flex-col gap-4">
                                <div className="flex justify-center items-center">
                                    <img src={selectedProduct.image} alt={selectedProduct.item} className="h-80 w-80" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <button onClick={slideLeft} disabled={currentIndex === 0} className={`px-2 ${currentIndex === 0 && 'opacity-50 cursor-not-allowed'}`}>
                                        <MdKeyboardArrowLeft className="text-2xl font-bold" />
                                    </button>
                                    <div className="flex overflow-hidden w-84">
                                        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${(currentIndex - 1) * 33.33}%)` }}>
                                            {medicineList.map((item, index) => (
                                                <div key={index} className={`flex-shrink-0 w-1/3 p-4 cursor-pointer transition-all duration-500 ${index === currentIndex ? 'scale-110 z-10' : 'scale-90 opacity-60'}`} onClick={() => setCurrentIndex(index)}>
                                                    <img src={item.image} className="w-full h-32 object-cover rounded-lg" alt={item.item} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button onClick={slideRight} disabled={currentIndex === medicineList.length - 1} className={`px-2 ${currentIndex === medicineList.length - 1 && 'opacity-50 cursor-not-allowed'}`}>
                                        <MdKeyboardArrowRight className="text-2xl font-bold" />
                                    </button>
                                </div>
                            </div>

                            <div className="w-1/2 text-center">
                                <h1 className="text-3xl font-bold">User Product Details</h1>
                                <div className="flex flex-col px-12 mt-8 gap-4 text-lg">
                                    <div className="flex justify-between">
                                        <div>Order Number</div>
                                        <div>{selectedProduct.orderNumber}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>Category</div>
                                        <div>{selectedProduct.category}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>Product ID</div>
                                        <div>{selectedProduct.productid}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>Item</div>
                                        <div>{selectedProduct.item}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>Quantity</div>
                                        <div>{selectedProduct.quantity}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>Price</div>
                                        <div>{selectedProduct.price}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>Sale Price</div>
                                        <div>{selectedProduct.saleprice}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>Address:</div>
                                        <div>{selectedProduct.address}</div>
                                    </div>
                                </div>

                                <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewMedicine;
