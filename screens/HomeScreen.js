import {products} from '../data.js';
import { instagramImg } from '../data.js';
import { FashionNews } from '../data.js';
import Slider from '../components/Slider.js';


const HomeScreen = {
    after_render: () => {},

    render: () => {
        return `
        <section> ${Slider.render()} </section>
        <section class="banner-container">
        <div class="items-container">
            <div class="banner-items">
                <img src="images/banner-1.jpg.webp">
                <p>Clothing Collections 2023</p>
                <h5>SHOP NOW</h5>
            </div>
            <div class="banner-items">
                <img src="images/banner-3.jpg.webp">
                <p>Shoes Spring 2023</p>
                <h5>SHOP NOW</h5>
            </div>
        </div>
    </section>

    <section class="product-container">
        <div class="product-cont">${products.map(product => `
        <div class="product-items">
            <a href="/#/product/${product.id}">
              <img src="${product.image}">
            </a>
            <div class="product-details">
                <h5>${product.name}</h5>
                <div style="margin: 8px 0px" class="rating">
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <h3>${product.price} $</h3>
            </div>
        </div> `
        ).join('\n')}
        </div>
    </section>

    <section class="product-offer">
        <div class="blank-white-box"></div>
        <div class="product-offer-container">
            <div class="product-offer-titles">
                <h5>Clothings Hot</h5>
                <p>Shoe Collection</p>
                <h5>Accessories</h5>
            </div>
            <div class="product-offer-img">
                <div class="sale-offer-tag">
                    <h5>Sale Of</h5>
                    <h3>$29.99</h3>
                </div>
                <img src="images/product-sale.png.webp">
            </div>
            <div class="product-offer-timer">
                <h5>DEAL OF THE WEEK</h5>
                <h2>Multi-pocket Chest Bag Black</h2>
                <span style="font-size: 40px;">3  :  18  :  10  :  56</span>
                <button>SHOP NOW</button>
            </div>
        </div>
    </section>

    <section class="instagram">
        <div class="instagram-container">
            <div class="instagram-images">${instagramImg.map(elm => `
            <img src="${elm.img}">
            `).join('\n')}
            </div>
            <div class="instagram-text">
                <h3>Instagram</h3>
                <span>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.</span>
                <h2>#Male_Fashion</h2>
            </div>
        </div>
    </section>

    <section style="text-align: -webkit-center; padding-bottom: 200px; margin: 20px 0px;"class="latest-news">
        <div class="latest-news-container">
            <h5>LATEST NEWS</h5>
            <h1>Fashion New Trends</h1>

            <div class="latest-news-items-2">${FashionNews.map(elm => `
            <div class="latest-news-items-container">
            <a href="/#/news/${elm.id}">
                <div class="latest-news-items">
                    <img src="${elm.img}" alt="">
                    <div class="latest-news-items-details">
                        <h6>${elm.date}</h6>
                        <p>${elm.title}</p>
                        <h2>READ MORE</h2>
                    </div>
                </div>
            </a>
            </div> 
            `).join('\n')}
            </div>
        </div>
    </section>`
    }
}

export default HomeScreen;