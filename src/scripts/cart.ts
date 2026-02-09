import '../components/drawer.js'
import '../components/header.js'
import { renderCartProducts } from '../render/cart.js';
import { cartProduct } from '../render/productDetails.js';
import './core/stateManager.js'

const  state:HTMLElement|null =document.querySelector("app-state");
if(state?.dataset) 
{
const products:cartProduct[] = JSON.parse(state.dataset.cartProducts ?? "[]");
renderCartProducts(products)

}

