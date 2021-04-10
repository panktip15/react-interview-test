import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useUpdateCart } from '../hooks/cart';
import AppBar from './AppBar.jsx';
import Products from './Products';
import Cart from './Cart.jsx';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.grey[200]
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const {
    cart,
    cartItemCount,
    addProduct,
    removeProduct,
    updateProduct
  } = useUpdateCart();

  return (
    <div className={classes.wrapper}>
      <AppBar />
      <Products addProduct={addProduct} />
      <Cart cart={cart}
        cartItemCount={cartItemCount}
        removeProduct={removeProduct}
        updateProduct={updateProduct} />
    </div>
  )
}

export default LandingPage