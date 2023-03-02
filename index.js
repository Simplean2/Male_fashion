import HomeScreen from './screens/HomeScreen.js';
import {parseRequestUrl} from './utils.js';
import Header from './components/Header.js';
import Slider from './components/Slider.js'; 
import Footer from './components/Footer.js';
import ProductScreen from './screens/ProductScreen.js';
import Error404Screen from './screens/Error404Screen.js';
import CartScreen from './screens/CartScreen.js';
import CheckOutScreen from './screens/CheckOutScreen.js';
import SigninScreen from './screens/SignInScreen.js';



const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart': CartScreen,
  '/cart/:id': CartScreen,
  '/checkout': CheckOutScreen,
  '/signin': SigninScreen,
}

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    // Header
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();

    // Main
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();

    // Footer
    const footer = document.getElementById('footer-container');
    footer.innerHTML = await Footer.render();
};

window.addEventListener('load', router)
window.addEventListener('hashchange', router)