import { getData } from '../products/apiPr.js'
getData()


import {getCart, saveCart, addToCart, removeFromCart, changeQty, renderCart} from '../cart/cart.js'


import { openCart, closeCart, checkout, update } from '../cart/cart.js'
update()

let cartBtn = document.querySelector('.cart')
let closeBtn = document.querySelector('.closeCart')
let checkoutBtn = document.querySelector('.checkout')

if (cartBtn) cartBtn.onclick = openCart
if (closeBtn) closeBtn.onclick = closeCart
if (checkoutBtn) checkoutBtn.onclick = checkout