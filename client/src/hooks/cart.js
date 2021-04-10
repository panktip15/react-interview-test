import { useState, useEffect } from "react";

/*
 * We are assuming that the user is not logged in and are saving the users cart * in the local storage once the user signs in, we would then get their cart
 * from the database, and combine the cart items.
 * If the user is already logged in, we would add logic to store cart items
 * directly to the database and not utilize the local storage
 */

export const useUpdateCart = () => {
  // eslint-disable-next-line no-undef
  const storage = window.localStorage;
  const CART = "cart";
  const getInitialCart = () => {
    try {
      const json = storage.getItem(CART);
      if (json) return JSON.parse(json);
    } catch {
      console.error("there was an error getting Cart from local storage");
    }
    // Either the value isn't in storage yet or JSON parsing failed, so
    // set to the initial value in both places'
    storage.setItem(CART, JSON.stringify([]));
    return [];
  };

  const [cart, setCart] = useState(getInitialCart);
  const cartItems = cart.reduce((total, { quantity }) => total + quantity, 0);

  const addProduct = (itemID, price) => {
    let cartCopy = [...cart];
    let existingItem = cartCopy.find((cartItem) => cartItem.ID === itemID);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartCopy.push({ ID: itemID, quantity: 1, price });
    }
    setCart(cartCopy);
  };

  const removeProduct = (itemID) => {
    const cartCopy = [...cart];
    const updatedCart = cartCopy.filter((item) => item.ID != itemID);
    setCart(updatedCart);
  };

  const updateProduct = (itemID, amount) => {
    const cartCopy = [...cart];
    let existentItem = cartCopy.find((item) => item.ID == itemID);

    if (!existentItem) return;
    existentItem.quantity = amount;

    if (existentItem.quantity <= 0) {
      removeProduct(itemID);
    } else {
      setCart(cartCopy);
    }
  };

  useEffect(() => {
    localStorage.setItem(CART, JSON.stringify(cart));
  }, [cart]);

  return { cart, cartItems, addProduct, removeProduct, updateProduct };
};
