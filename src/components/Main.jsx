/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Products from "./Products";
// import { data } from "../data/data";
import Sizes from "./Sizes";

function Main({ products, cartItems, setCartItems, addToCart }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [sortProducts, setSortProducts] = useState([...products]);
  const [filterProducts, setFilterProducts] = useState([...products]);
  const [sortOrder, setSortOrder] = useState("");
  // const [cartItems, setCartItems] = useState([]);
  // const [hand, setSortOrder] = useState("");

  function handleSortByPrice(sortby) {
    console.log(sortby, "sort");
    setSortOrder(sortby);
    listProducts(sortby, sortProducts, setSortProducts, filterProducts);
  }
  function handleChangeSize(size) {
    setSelectedSize(size);
    console.log(size, "size");
    listProducts(size, sortProducts, setSortProducts, filterProducts);
  }

  function listProducts(
    sizeOrSort,
    sortProducts,
    setSortProducts,
    filterProducts
  ) {
    // console.log(sizeOrSort, sortProducts, setSortProducts, "lst");
    let tempSortProducts = [...sortProducts];
    const tempFilterProducts = [...filterProducts];

    if (sizeOrSort === "relevance") {
      console.log(sizeOrSort, "??");
      setSortProducts(tempFilterProducts);
    } else if (sizeOrSort === "lowest") {
      setSortProducts(tempSortProducts.sort((a, b) => a.price - b.price));
    } else if (sizeOrSort === "highest") {
      setSortProducts(tempSortProducts.sort((a, b) => b.price - a.price));
    } else if (sizeOrSort === "select") {
      setSortProducts(tempFilterProducts);
    } else if (sizeOrSort !== "") {
      setSortProducts(
        tempFilterProducts.filter((prod) =>
          prod.availableSizes.includes(sizeOrSort)
        )
      );
    }

    return setSortProducts;
  }

  return (
    <section className='mt-20 px-20 flex '>
      <Products
        products={products}
        sortProducts={sortProducts}
        setSortProducts={setSortProducts}
        sortOrder={sortOrder}
        setSortOrder={sortProducts}
        handleSortByPrice={handleSortByPrice}
        addToCart={addToCart}
        selectedSize={selectedSize}
        handleChangeSize={handleChangeSize}
      />
    </section>
  );
}

export default Main;
