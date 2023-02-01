import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from '../components/ProductCard';
import { useProduct } from "../Context/ProductProvider";

const Home = () => {
  const data = useProduct();
  const products = data.data.data;


  console.log(products);


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>

      {
        products?.map((product, i) =>
          <ProductCard key={i} product={product}>
          </ProductCard >
        )
      }

    </div>
  );
};

export default Home;
