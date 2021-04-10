import React from "react";
import { useUpdateCart } from '../hooks/cart';
import AppBar from './AppBar.jsx';
import Products from './Products';

const LandingPage = () => {
  const { cart, cartItemCount, addProduct, removeProduct, updateProduct } = useUpdateCart();

  return (
    <>
      <AppBar
        cart={cart}
        cartItemCount={cartItemCount}
        removeProduct={removeProduct}
        updateProduct={updateProduct}
      />
      <Products addProduct={addProduct} />
    </>
  )
}

export default LandingPage