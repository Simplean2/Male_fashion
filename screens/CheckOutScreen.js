import { getCartItems, getUserInfo } from "../LocalStorage.js";


const CheckOutScreen = {
  after_render: () => {

  },

  render: () => {

    const userInfo = getUserInfo();
    const cartItems = getCartItems();

    console.log(userInfo.fname);

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

    <section class="checkout-main-cont">
      <div class="checkout-cont">
        <div class="building-details-cont">
          <div class="have-coupon-cont">
            <p>Have a coupon? Click here to enter your code</p>
          </div>

          <h1>BUILDING DETAILS</h1>

          <p>First Name <span>*</span></p>
          <input class="input-box" type=text value=${userInfo.fname}>

          <p>Last Name <span>*</span></p>
          <input class="input-box" type=text value=${userInfo.lname}>

          <p>Country <span>*</span></p>
          <input class="input-box" type=text>

          <p>Address <span>*</span></p>
          <input class="input-box" type=text placeholder="Street Address" value=${userInfo.address}>
          <input class="input-box" type=text placeholder="Apartment, suite, unite ect (optional)">

          <p>Town / City <span>*</span></p>
          <input class="input-box" type=text>

          <p>Country / State <span>*</span></p>
          <input class="input-box" type=text>

          <p>Postcode / ZIP <span>*</span></p>
          <input class="input-box" type=text>

          <p>Phone <span>*</span></p>
          <input class="input-box" type=text>

          <p>Email <span>*</span></p>
          <input class="input-box" type=text value=${userInfo.email}>

          <label for="acc" class="lbl-account"> 
            <input class="check-box" type="checkbox" id="acc">
            <h5>Create an account</h5>
          </label>
          <p>
            Create an account by entering the 
            information below. If you are a returning 
            customer please login
            at the top of the page
          </p>

          <p>Account Password<span>*</span></p>
          <input class="input-box" type=text>

        </div>
        <div class="your-order-cont">
          <h4 class="order-title">YOUR ORDER</h4>
          <div class="checout-order-details">
          <div class="product-checkout-list">
            <h5>Product</h5>
            <h5>Total</h5>
          </div>
          ${cartItems.map((item) => `
          <div class="product-checkout-list">
            <h5>${item.name}</h5>
            <h5>$ ${item.price}</h5> 
          </div>
          `).join('\n')}
          </div>

          <div class="checkout-order-total">
            <h4>Total</h4>
            <h5>$${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h5>
          </div>

          <label for="acc" class="lbl-checout-paypal"> 
            <input class="check-box" type="checkbox" id="acc">
            <h5>Paypal</h5>
          </label>
          <button class="checkout-btn">PLACR ORDER</button>
        </div>
      </div>
    </section>
    
    `
    
  }
}


export default CheckOutScreen;