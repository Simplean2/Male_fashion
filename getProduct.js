import { products } from "./data.js";

let x = null;

const getProduct = (id) => {
  products.forEach(elm => {
    if (elm.id === id) 
      x = elm;
    })
    return x;
}

export default getProduct;