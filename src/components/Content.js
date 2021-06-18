import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Content = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <>
            
                {
                    products.map(product => (
                        <ProductCard cool key={product.id} product={product} />

                    ))
                }
            
        </>
    );
};

export default Content;