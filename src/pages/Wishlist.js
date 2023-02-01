import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../Context/ProductProvider";

const Wishlist = () => {
    const { state: { wishlist, loading, error } } = useProduct();

    let content;

    if (loading) {
        content = <p>data is loading.</p >
    }

    if (error) {
        content = <div>something went wrong.</div>
    }

    if (!loading && !error & wishlist.length === 0) {
        content = <p>nothing to show, Product List is empty.</p>
    };

    if (!loading && !error & wishlist.length >= 1) {
        content = wishlist?.filter(product => product.rating >= 5).map((product, i) =>
            <ProductCard key={i} product={product}>
            </ProductCard >
        )
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
        </div>
    );
};

export default Wishlist;
