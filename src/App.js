import { useState } from "react";
import "./App.css";
import CartItems from "./components/CartItems";
import FloatingCartIcon from "./components/FloatingCartIcon";
import Header from "./components/Header";
import Main from "./components/Main";
import { data } from "./data/data";

function App() {
  const { products } = data;
  // console.log(products, "products");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((p) =>
          p.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : p
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function decreaseQuantity(product) {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((p) => p.id !== product.id));
    } else {
      console.log(product.id, "cartItemId");
      setCartItems(
        cartItems.map((p) =>
          p.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : p
        )
      );
    }
  }

  function deleteFromCart(product) {
    // const exist = cartItems.find((x) => x.id === product.id);

    setCartItems(cartItems.filter((p) => p.id !== product.id));
  }

  return (
    <div className='app static w-[100%]'>
      {showCart ? (
        <CartItems
          setShowCart={setShowCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
          decreaseQuantity={decreaseQuantity}
        />
      ) : (
        <FloatingCartIcon setShowCart={setShowCart} cartItems={cartItems} />
      )}

      <Header />
      <Main
        products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
