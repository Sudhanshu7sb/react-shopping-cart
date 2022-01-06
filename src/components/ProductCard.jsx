import React from "react";

function ProductCard({ img, item, addToCart, selectedSize }) {
  return (
    <div className='p-2 w-[24%] flex flex-col items-center group border border-opacity-0 hover:border-opacity-90 hover:border hover:border-gray-900 '>
      <img
        src={`/static/images/${item.sku}_1.jpg`}
        alt=''
        className='group-hover:border-gray-800 w-[100%] h-[200px]'
      />
      <h3 className='group-hover:border-gray-800 text-md mt-4'>{item.title}</h3>
      <span className='font-bold text-yellow-400 text-xl'>___</span>
      <h3 className='group-hover:border-gray-800 text-md'>
        Price : $<span className='text-2xl font-semibold '>{item.price}</span>
      </h3>

      <button
        className='px-5 py-3 my-3 group-hover:border-gray-800 bg-black hover:bg-yellow-400 text-white text-xl'
        onClick={() => {
          // addToCart(item);
          if (selectedSize !== "") addToCart(item);
        }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
