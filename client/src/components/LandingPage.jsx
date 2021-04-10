import React from "react";
import { useUpdateCart } from '../hooks/cart';
import AppBar from './AppBar.jsx';
import Products from './Products';

const LandingPage = () => {
  const { addProduct, cartItems } = useUpdateCart();

  return (
    <>
      <AppBar cartItems={cartItems} />
      <Products addProduct={addProduct} />
    </>
  )
}

export default LandingPage