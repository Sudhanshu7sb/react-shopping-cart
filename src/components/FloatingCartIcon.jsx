import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

function FloatingCartIcon({ setShowCart, cartItems }) {
  return (
    <div
      className='fixed top-0 right-1 bg-yellow-400 text-white w-16 p-2 cursor-pointer'
      onClick={() => setShowCart(true)}>
      <ShoppingCartIcon className='text-sm font-thin' />
      <div className='absolute bg-black text-white font-semibold rounded-full p-1 bottom-3 right-3 w-4 h-4 flex justify-center items-center'>
        {cartItems.length}
      </div>
    </div>
  );
}

export default FloatingCartIcon;
