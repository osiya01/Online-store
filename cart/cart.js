//получить
export function getCart() {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
}
// сохранить
export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
// добавить
export function addToCart(product) {
  let cart = getCart();
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      cart[i].qty = cart[i].qty + 1;
      found = true;
    }
  }
  if (!found) {
    product.qty = 1;
    cart.push(product);
  }
  saveCart(cart);
  update();
}
// удалить
export function removeFromCart(id) {
  let cart = getCart();
  let newCart = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      newCart.push(cart[i]);
    }
  }
  saveCart(newCart);
  update();
  renderCart();
}
// изменить
export function changeQty(id, value) {
  let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty = cart[i].qty + value;
    }
  }
  let result = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].qty > 0) {
      result.push(cart[i]);
    }
  }
  saveCart(result);
  update();
  renderCart();
}
// cnt
export function update() {
  let cnt = document.querySelector(".cntBtn");
  if (!cnt) return;
  let cart = getCart();
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i].qty;
  }
  cnt.innerText = sum;
}
// open modaal
export function openCart() {
  let modal = document.querySelector(".cartModal");
  if (modal) {
    modal.classList.remove("hidden");
    renderCart();
  }
}
// close
export function closeCart() {
  let modal = document.querySelector(".cartModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}
// render
export function renderCart() {
  let box = document.querySelector(".cartItems");
  let totalEl = document.querySelector(".totalPrice");
  if (!box || !totalEl) return;
  let cart = getCart();
  box.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total = total + item.price * item.qty;
    let div = document.createElement("div");
    div.className = "cartItem";
    div.innerHTML = `
            <img src="${item.image}">
            <div>
                <p>${item.name}</p>
                <strong>$${item.price}</strong>
                <div>
                    <button class="plus">+</button>
                    <span>${item.qty}</span>
                    <button class="minus">-</button>
                </div>
            </div>
            <button class="remove">x</button>
        `;
    div.querySelector(".plus").onclick = function () {
      changeQty(item.id, 1);
    };
    div.querySelector(".minus").onclick = function () {
      changeQty(item.id, -1);
    };
    div.querySelector(".remove").onclick = function () {
      removeFromCart(item.id);
    };
    box.append(div);
  }
  totalEl.innerText = "$" + total;
}
// checkout
export function checkout() {
  localStorage.removeItem("cart");
  update();
  renderCart();
  closeCart();
}
