import React, { useState } from 'react';
import Card from './Card';
import { ProductsArray } from '../../assets/Products';

const Products = () => {
    const [products, setProducts] = useState(ProductsArray);

    const deleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };
    return (
        <>
            <h1 className='text-3xl font-bold text-center'>Products</h1>
            <div className='flex flex-wrap justify-center bg-red-100'>
                {products.map((item) => (
                    <Card product={item} key={item.id} onDelete={deleteProduct} />
                ))}
            </div>
        </>
    );
};

export default Products;
