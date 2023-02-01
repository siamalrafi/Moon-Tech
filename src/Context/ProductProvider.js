import React, { Children, createContext, useEffect, useReducer, useState } from 'react';
import { useContext } from 'react';
import { actionTypes } from '../State/ProductsState/ActionTypes';
import { intialState, pruductReducer } from '../State/ProductsState/ProductReducer';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    // const [data, setData] = useState([]);

    const [state, dispatch] = useReducer(pruductReducer, intialState);


    useEffect(() => {
        dispatch({ type: actionTypes.FATCHING_START })
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FATCHING_SUCCESS, payload: data.data })
            )
            .catch(err => dispatch({ type: actionTypes.FATCHING_ERROR }));
    }, []);

    const value = {
        state,
        dispatch
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