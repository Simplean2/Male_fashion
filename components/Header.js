

const Header = {
  after_render: () => {

  },

  render: () => {
    return `
        <div class="header-top">
            <div class="header-top-2">
                <p>Free shipping, 30-day return or refund guarantee.</p>
                <ul>
                    <a href="/#/signin"><li>SIGN IN</li></a>
                    <li>FAQS</li>
                    <li>USD</li>
                </ul>
            </div>
        </div>
        <div class="header-sub-menu-container">
            <div class="logo">
                <a href="/">
                    <img src="images/logo.png.webp" alt="">
                </a>
            </div>
            <div class="menu">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <li>Shop</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div class="options">
                <h4>M</h4>
                <h4>M</h4>
                <h4>M</h4>
                <h4>M</h4>
            </div>
        </div>
    `
  }
}

export default Header;