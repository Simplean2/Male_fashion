import { products } from "../data.js";
import { parseRequestUrl, selectedItem } from "../utils.js";
import getProduct from "../getProduct.js";


const ProductScreen = {
  after_render: (event) => {
    const request = parseRequestUrl();
    document.getElementById('add-to-cart').addEventListener('click', () => {
      document.location.hash = `/cart/${request.id}`;
    })
},

  render: () => {
    const request = parseRequestUrl().id;
    const element = getProduct(request);
    
    return `
    <section class="product-path-container">
      <div class="product-path">
        <a href="/"><h4>Home</h4></a>
        <p> ></p>
        <a href="Category"><h4>Category</h4></a>
        <p> ></p>
        <a href="shirt"><h4>Shirt</h4></a>
        <p> ></p>
        <a href="t-shirt"><h4>${element.brand}</h4></a>
      </div>
    </section>

    <section class="product-details-main-container">
      <div class="product-details-container">

        <div class="product-image-container">
          <div class="image-big-element">
            <img src="${element.image}">
          </div>
          <div class="image-items-container">
            <img src="${element.image}">
            <img src="${element.image}">
            <img src="${element.image}">
            <img src="${element.image}">
          </div>
        </div>

        <div class="product-details-properties-main-container">
          <div class="product-details-properties-container-top">
            <div class="product-title-container">
              <p>${element.brand}</p>
              <h1>${element.name}</h1>
            </div>

            <div class="product-rating">
              <div class="product-rating-stars">
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
              <p>${element.rating}</p>
              </div>

              <div class="reviews">
              <p>${element.numReviews}</p>
              <p>Reviews</p>
              </div>
            </div>
            <div class="product-price-container">
              <h1 id="product-price">$ ${element.price}</h1>
            </div>
          </div>

          <div class="product-details-properties-container-botton">
            <div class="product-color-palette-container">
              <diV class="text-color-cont">
                <p>color (4)</p>
              </div>
                <div class="color-pallete-cont">
                  <button class = "color-btn">White</button>
                  <button class = "color-btn">Brown</button>
                  <button class = "color-btn">Green</button>
                  <button class = "color-btn">Blue</button>
                </div>
              </div>
              </div>
              <div class="about-product-cont">
                <div class="about-text-cont">
                  <p>About product</p>
                  <button class="show-more-btn">^</button>
                </div>
                <div class="text-about-cont">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                  </span>
                </div>
              </div> 
         </div>

          <div class="product-order-component-main-container">
          <div class="product-order-component-container">
            <h1>Order summary</h1>
            <div class="order-data-cont">
              <p>sent to</p>
              <p style="color: blue">Florida, 4408 Powder House Road</p>
              </div>
                <div class="product-weight-cont">
                  <p>Weight</p>
                  <p>500gr</p>
                </div>

                <div class="product-color-cont">
                  <p>Color</p>
                  <p>White</p>
                </div>

                <div class="product-delivery-cont">
                  <p>Delivery</p>
                  <p>29.99 $</p>
                </div>

              <div class="mini-product-details-cont">
                <img src="${element.image}">
                <div class="mini-product-details-text-cont">
                  <div class="mini-product-details-text-top">
                    <h3>${element.name}</h3>
                  </div>
                  <div class="mini-product-details-text-bottom">
                    <h5>Black & White</h5>
                    <h5 id="item-qty">1x</h5>
                  </div>
                </div>
              </diV>
            <div class="order-buttons-cont">
              <button class="add-to-cart" id="add-to-cart">Add to cart</button>
              <button class="buy-now">Buy now</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

export default ProductScreen;