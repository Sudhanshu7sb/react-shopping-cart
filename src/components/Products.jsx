/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ProductCard from "./ProductCard";

function Products({
  products,
  selectedSizes,
  setSelctedSizes,
  sortProducts,
  setSortProducts,
  setSortOrder,
  handleSortByPrice,
  addToCart,
}) {
  return (
    <div className='w-[75%]'>
      <header className='w-[100%] flex justify-between items-center'>
        <h5>{sortProducts?.length} Products found</h5>
        <div className='options'>
          <label htmlFor='orderby'>Order By </label>
          <select
            name='orderby'
            className='ml-2 bg-transparent border-2 border-gray-200 hover:border-gray-600'
            onChange={(e) => handleSortByPrice(e.target.value)}>
            <option value='relevance'>Relevance</option>
            <option value='lowest'>Lowest to Highest</option>
            <option value='highest'>Highest to Lowest</option>
          </select>
        </div>
      </header>
      <div className='w-[100%] flex flex-wrap space-x-2 space-y-2'>
        {sortProducts?.map((item) => (
          <ProductCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
