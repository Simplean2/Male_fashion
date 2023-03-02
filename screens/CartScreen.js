import { setCartItems, getCartItems, getUserInfo } from "../LocalStorage.js";
import getProduct from "../getProduct.js";
import { parseRequestUrl,rerender } from "../utils.js";


const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.id === item.id);
  if (existItem) {
    if (forceUpdate) {
      cartItems = cartItems.map((x) => x.id === existItem.id ? item : x);
    }
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if (forceUpdate) {
    rerender(CartScreen);
  }
};

const removeFromCart = (id) => {
  setCartItems(getCartItems().filter((x) => x.id !== id));
  if (id === parseRequestUrl().id) {
    document.location.hash = '/cart';
  } else {
    rerender(CartScreen);
  }
};

const CartScreen = {
  after_render: () => {

    document.getElementById('proc-to-checkout').addEventListener('click', () =>{
      if(localStorage.getItem('userInfo')){
        document.location.hash = '/checkout';
      }else{
        document.location.hash = '/signin';
      }
    })

    const qtySelects = document.getElementsByClassName('qty-select');
    Array.from(qtySelects).forEach((qtySelect) => {
      qtySelect.addEventListener('change', (e) => {
        const item = getCartItems().find((x) => x.id === qtySelect.id);
        addToCart({ ...item, qty: Number(e.target.value) }, true);
      });
    });

    const deleteButtons = document.getElementsByClassName('fa fa-close');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', () => {
        removeFromCart(deleteButton.id);
      });
    });
  },

  render: async() => {

    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: 1,
      });
    }
    const cartItems = getCartItems();

    return `
    <div class="location-web-main-container">
      <div class="location-web-container">
        <div class="shopping-cart-title">
          <h1>Shopping Cart</h1>
        </div>

        <div class="shopping-location">
          <span> Home > Shop > Shopping Cart</span>
        </div>
      </div>
    </div>

    <section class="product-cart-main-cont">
      <div class="product-cart-cont">
        <div class="product-items-cont">
          <table class="table-cont">
            <thead class="thead">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            ${
              cartItems.length === 0
                ? '<div>Cart is empty. <a href="/#/">Go Shopping</a>'
                : cartItems.map( (item) => `
                <tbody>
                  <tr class="td-container">
                    <td class="td-img-text">
                      <div>
                        <img src="${item.image}">
                      </div>
                      <div class="text-product">
                        <h4>${item.name}</h4>
                        <h2>$ ${item.price}</h2>
                      </div>
                    </td>
                    <td style="width:180px">
                    <div>
                      <span class="fa fa-angle-left dec qtybtn" id="${item.id}"></span>
                      <input type="text" value="1" class="qty-select" id="${item.id}">
                      <span class="fa fa-angle-right inc qtybtn" id="${item.id}"></span>
                    </div>
                    </td>
    
                    <td class="td-price">$ ${item.price}</td>
    
                    <td>
                      <i class="fa fa-close" id="${item.id}"> 
                    </td>
    
                  </tr>
                </tbody>
                `).join('\n')}
                    
          </table>
        </div>

        <div class="product-details-order">
          <div class="discount-code-cont">
            <h2>DISCOUNT CODE</h2>
            <div class="discount-code-input-cont">
              <input type="text" placeholder="Coupon code">
              <button>APPLY</button>
            </div>
          </div>

          <div class="cart-total-main-container">
            <div class="cart-total-container">
              <div class="cart-total"><p>CART TOTAL</p></div>
              <div class="cart-value-cont">
                <ul>
                  <li>Total<span>
                  $${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </span></li>
                </ul>
              </div>
              <button id="proc-to-checkout">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  },
};


export default CartScreen;