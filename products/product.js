import { addToCart } from "../cart/cart.js";
let box = document.querySelector(".box");

export function get(data) {
  box.innerHTML = "";

  data.forEach((item) => {
    const fields = item.fields;

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = fields.image?.[0]?.url;
    img.className = "img";
    img.onclick = () => {
      localStorage.setItem("id", item.id);
      window.location.href = "../getById/getbyid.html";
    };

    const name = document.createElement("h5");
    name.textContent = fields.name;
    name.className = "name";

    const price = document.createElement("h6");
    price.textContent = `$${fields.price}`;
    price.className = "price";

    let addCartBtn = document.createElement("button");
    addCartBtn.innerText = "Add to cart";
    addCartBtn.className = "addCartBtn";

    addCartBtn.onclick = () => {
      addToCart({
        id: item.id,
        name: fields.name,
        price: fields.price,
        image: img.src,
      });
    };

    card.append(img, name, price, addCartBtn);
    box.append(card);
  });
}
