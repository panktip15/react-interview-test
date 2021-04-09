import useStorage from "./browser-storage";

export const useUpdateCart = () => {
  const CART = "cart";
  const TOTAL_PRODUCTS = "total";

  const [cart, updateCart] = useStorage(CART, []);
  const [total, updateTotal] = useStorage(TOTAL_PRODUCTS, 0);

  const addProduct = (productId) => {
    cart.push({ productId: productId + 1 });
    updateCart(cart);
    updateTotal(total + 1);
  };

  const removeProduct = (productId) => {
    const updatedCart = cart.filter(
      (product) => product.productId !== productId
    );
    updateCart(updatedCart);
    updateTotal(total - 1);
  };
  return { cart, addProduct, removeProduct };
};
