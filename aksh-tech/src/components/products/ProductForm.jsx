import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;
    const [productData, setProductData] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
    });

    useEffect(() => {
        if (product) {
            setProductData(product);
        } else {
            console.log('No product data    ');
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Product Data:', productData);
        navigate('/');
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Update Product</h2>
            <form className='bg-red-50 my-10 w-1/2 m-auto rounded-2xl p-10' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        name="title"
                        value={productData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        type="text"
                        name="category"
                        value={productData.category}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="text"
                        name="image"
                        value={productData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className='text-center mt-4'>
                    <button className='bg-blue-300 px-6 py-2 rounded-3xl font-bold'>Submit</button>
                </div>
            </form>
        </div>
    );
};
export default ProductForm;
