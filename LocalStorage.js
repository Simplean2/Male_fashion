export const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
  return cartItems;
}

export const setCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const setUserInfo = (userInfo) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

export const getUserInfo = () => {
  const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : [];
  return userInfo;
}

