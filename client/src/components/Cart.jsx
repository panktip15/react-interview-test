import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CartModal from './CartModal.jsx';

const useStyles = makeStyles((theme) => ({
  cart: {
    border: "1px solid black",
    background: theme.palette.common.white,
    borderRadius: '5px',
    position: "fixed",
    right: 5,
    top: '50%'
  },
  icon: {
    fontSize: theme.typography.h4.fontSize,
  }
}));

const Cart = ({ cart, cartItemCount, removeProduct, updateProduct }) => {
  const classes = useStyles();
  const [displayCart, setDisplayCart] = useState(false)

  return (
    <>
      <div className={classes.cart}>
        {cartItemCount !== 0 && <IconButton
          onClick={() => setDisplayCart(true)}
        >
          <Badge badgeContent={cartItemCount} color="secondary">
            <ShoppingCart
              className={classes.icon}
              color='primary' />
          </Badge>
        </IconButton>}
      </div>
      <CartModal
        open={displayCart}
        handleClose={() => setDisplayCart(false)}
        cart={cart}
        removeProduct={removeProduct}
        updateProduct={updateProduct}
      />
    </>
  );
}

export default Cart