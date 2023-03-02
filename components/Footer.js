const Footer = {
  after_render: () => {

  },

  render: () => {
    return `
    <div class="footer-container">
            <div class="footer-elm-cont">
                <div class="footer-about">
                    <img src="images/footer-logo.png.webp">                
                    <span>The customer is at the heart of our unique business model,
                    which includes design.</span>
                    <div class="footer-about-icons">
                        <img src="images/payment.png.webp">
                    </div>
                </div>
                <div class="footer-items1">
                    <h5>SHOPPING</h5>
                    <ul>
                        <li>Clothing Store</li>
                        <li>Trending Shoes</li>
                        <li>Accessories</li>
                        <li>Sale</li>
                    </ul>
                </div>
                <div class="footer-items1">
                    <h5>ABOUT US</h5>
                    <ul>
                        <li>Contact Us</li>
                        <li>Payment Methods</li>
                        <li>Delivary</li>
                        <li>Return & Exchanges</li>
                    </ul>
                </div>
                <div class="footer-news-later">
                    <h5>NEWLETTER</h5>
                    <span>Be the first to know about new arrivals, look books, sales & promos!</span>
                    <input type="text" placeholder="Your email">
                </div>
            </div>
        </div>
        <p>Copyright © 20232020 All rights reserved | This template is made with  by Colorlib</p>
    `
  }
}

export default Footer;