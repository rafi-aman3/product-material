import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrency } from '../features/currencyMode/currencyModeSlice';
import ProductCard from './ProductCard';

const Content = () => {

    const [products, setProducts] = useState([]);

    const currentCurrency = useSelector(selectCurrency);

    const [currencyConverter, setCurrencyConverter] = useState({})  


    useEffect(() => {
        const url = `https://free.currconv.com/api/v7/convert?q=USD_${currentCurrency}&compact=ultra&apiKey=1f15b3f1f96acce93efd`;
        axios(url)
            .then(res => setCurrencyConverter(res.data[`USD_${currentCurrency}`]))

    }, [currentCurrency])

    useEffect(() => {

        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <>
            
                {
                    products.map(product => (
                        <ProductCard currencyConverter={currencyConverter} cool key={product.id} product={product} />

                    ))
                }
            
        </>
    );
};

export default Content;