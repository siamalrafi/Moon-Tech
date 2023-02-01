import React, { Children, createContext, useEffect, useReducer, useState } from 'react';
import { useContext } from 'react';
import { intialState, pruductReducer } from '../State/ProductsState/ProductReducer';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const [state, dispatch] = useReducer(pruductReducer, intialState);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const value = {
        data,
    };

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};


export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context;
};



export default ProductProvider;