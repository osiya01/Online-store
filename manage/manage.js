import { addToCart } from "../cart/cart.js";
import { openDeleteModal } from "../manage/delete.js";
import { editUser } from "../manage/put.js";
let box = document.querySelector(".box");

export function get(data) {
  box.innerHTML = "";

  data.forEach((element) => {
    const fields = element.fields;

    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.src = fields.image?.[0]?.url || "https://via.placeholder.com/150";
    image.classList.add("img");
    image.onclick = () => {
      localStorage.setItem("id", element.id);
      window.location.href = "../getById/getbyid.html";
    };

    let name = document.createElement("h5");
    name.innerText = fields.name;
    name.className = "name";

    let price = document.createElement("h6");
    price.innerText = `$${fields.price}`;
    price.className = "price";

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editUser(element);

    const delBtn = document.createElement("button");
    delBtn.className = "deleteBtn";
    delBtn.innerText = "Delete";
    delBtn.onclick = () => openDeleteModal(element.id);

    const btns = document.createElement("div");
    btns.className = "btns";
    btns.append(editBtn, delBtn);

    card.append(image, name, price, btns);
    box.append(card);
  });
}
