import { useState, useEffect } from "react";

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
  const total = cart.reduce((total, { quantity }) => total + quantity, 0);

  const addProduct = (itemID) => {
    let cartCopy = [...cart];
    let existingItem = cartCopy.find((cartItem) => cartItem.ID === itemID);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartCopy.push({ ID: itemID, quantity: 1 });
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

  return { cart, total, addProduct, removeProduct, updateProduct };
};
