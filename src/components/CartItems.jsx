import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
// import img from "../images/100_1.jpg";

function CartItems({
  setShowCart,
  cartItems,
  setCartItems,
  addToCart,
  decreaseQuantity,
  deleteFromCart,
}) {
  let totalPrice = cartItems.reduce((acc, curr) => {
    acc = acc + curr.price * curr.quantity;
    return acc;
  }, 0);
  return (
    <div className='bg-gray-900 opacity-90 z-10 fixed h-screen top-0 right-0 w-[30%] flex flex-col'>
      <button
        className='bg-gray-900 py-2 px-3  text-white absolute right-[101%]'
        onClick={() => setShowCart(false)}>
        X
      </button>
      <header className='flex py-5 text-white space-x-3 w-full justify-center items-center border-b-2 border-gray-400'>
        <ShoppingCartIcon className='w-5 h-5' />
        <h5 className='text-lg'>Cart ({cartItems.length})</h5>
      </header>
      <main className='cart-items-container flex flex-col'>
        {cartItems.length !== 0 ? (
          ""
        ) : (
          <h3 className=' text-gray-400'>NO Items In Cart </h3>
        )}
        <div className='cart-items flex flex-col py-3 px-3 w-full last:border-0'>
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div
                key={item.id}
                className='flex justify-between items-center pb-10 my-3 border-b-0 border-gray-400 space-y-2'>
                <div className='flex '>
                  <img
                    src={`/static/images/${item.sku}_2.jpg`}
                    alt={item.sku}
                    className='w-[70px] h-[90px] '
                  />
                  <div className='flex flex-col ml-2 space-y-2'>
                    <p className='text-white'>{item.title}</p>
                    <p className='text-gray-400'>{item.availableSizes[0]}</p>
                    <p className='text-gray-400'>Quantity : {item.quantity}</p>
                  </div>
                </div>
                <div className='flex flex-col space-y-2'>
                  <p
                    className='text-white text-right cursor-pointer hover:text-yellow-400'
                    onClick={() => deleteFromCart(item)}>
                    X
                  </p>
                  <p className='text-yellow-400'>{item.price}</p>
                  <p className='flex text-white justify-around space-x-2'>
                    <button
                      className='bg-gray-700 hover:bg-gray-800 py-1 px-3 text-yellow-400'
                      onClick={() => decreaseQuantity(item)}>
                      -
                    </button>
                    <button
                      className='bg-gray-700 hover:bg-gray-800 py-1 px-3 text-yellow-400'
                      onClick={() => addToCart(item)}>
                      +
                    </button>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </main>
      <footer className=' border-t-2 border-gray-400 flex flex-col text-white pt-5 pb-10'>
        <div className='mx-3 flex justify-between px-1'>
          <h5 className='my-3'>TOTAL</h5>
          <h5 className='text-yellow-400 my-3'>{totalPrice}</h5>
        </div>
        <button className=' mx-3 bg-black py-2 px-5 hover:bg-gray-800'>
          CHECKOUT
        </button>
      </footer>
    </div>
  );
}

export default CartItems;
