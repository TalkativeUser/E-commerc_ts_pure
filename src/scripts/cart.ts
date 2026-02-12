import '../components/drawer.js'
import '../components/header.js'
import '../components/categoriesBar.js'
import { renderCartProducts } from '../render/cart.js';
import { appState } from './core/stateManager.js';
import './core/stateManager.js'
import '../components/wraperPages.js'
import { ICartProduct } from '../types.js';

if(appState.state) 
{
const products:ICartProduct[] = appState.state.cartProducts ?? "[]";
renderCartProducts(products)

}

