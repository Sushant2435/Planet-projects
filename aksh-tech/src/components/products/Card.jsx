import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({ product, onDelete }) => {
    const { id, title, image, description, category, price } = product;
    const descriptionWords = description.split(' ');
    const truncatedDescription = descriptionWords.slice(0, 10).join(' ');
    console.log(product)

    return (
        <div className='bg-orange-100 w-[300px] h-auto m-4 rounded-2xl shadow-xl pb-4'>
            <div className='relative'>
                <img src={image} alt="product image" className='h-[250px] w-full object-fill rounded-t-2xl ' />
                <button onClick={() => onDelete(id)}>
                    <MdDelete className='absolute right-6 text-2xl text-red-400 mt-1' />
                </button>
                <Link to={`/edit-product/${id}`} state={{ product }}>
                    <FaEdit className='absolute right-0 text-xl text-blue-500' />
                </Link>
            </div>
            <div className='px-3'>
                <div className='text-gray-500 uppercase text-xl mt-2 font-semibold'>{category}</div>
                <div className='font-bold text-[17px] mt-2'>{title}</div>
                <div className='mt-2'>₹ {price}</div>
                <div className='mt-2'>
                    {truncatedDescription}{descriptionWords.length > 10 && '...'}
                    {descriptionWords.length > 10 && (
                        <span className='text-blue-500 ml-2'>
                            Read More
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
