export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExists = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (cartItemExists) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ?
        {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        } :
        { ...cartItem }
    );
  };

  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      quantity: 1,
    }
  ];
};

export const removeItemFromCart = (cartItems, id) => {
  return cartItems.filter(cartItem => cartItem.id !== id);
};

export const decreaseItemQty = (cartItems, itemToDecrease) => {
  const qtyOfItemToDecrease = itemToDecrease.quantity;
  if (qtyOfItemToDecrease === 1) {
    return removeItemFromCart(cartItems, itemToDecrease.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToDecrease.id ?
      {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      } :
      { ...cartItem }
  );
}