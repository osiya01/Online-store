let id = localStorage.getItem("id");
let api = "https://www.course-api.com/javascript-store-products";

let container = document.querySelector(".container");
let box = document.querySelector(".box");

async function getById() {
  const res = await fetch(api);
  const data = await res.json();

  const product = data.find(item => item.id === id);
  if (!product) return;

  render(product);
}

function render(item) {
  const f = item.fields;

  container.innerHTML = "";
  const section = document.createElement("section");
  section.className = "one";

  const home = document.createElement("a");
  home.href = "../home/home.html";
  home.textContent = "Home";

  const slash = document.createElement("span");
  slash.textContent = " / ";

  const name = document.createElement("span");
  name.textContent = f.name;

  section.append(home, slash, name);
  container.append(section);
  box.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "product";

  const img = document.createElement("img");
  img.src = f.image?.[0]?.url;
  img.className = "product-img";

  const info = document.createElement("div");
  info.className = "product-info";

  const title = document.createElement("h2");
  title.textContent = f.name;

  const company = document.createElement("h4");
  company.textContent = `BY ${f.company.toUpperCase()}`;

  const price = document.createElement("h3");
  price.textContent = `$${f.price}`;

  const desc = document.createElement("p");
  desc.textContent =
  "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ";

  const colors = document.createElement("div");
  colors.className = "colors";

  f.colors.forEach(color => {
    const span = document.createElement("span");
    span.style.background = color;
    colors.append(span);
  });

  const btn = document.createElement("button");
  btn.textContent = "ADD TO CART";
  btn.className = "add";

  info.append(title, company, price, desc, colors, btn);
  wrapper.append(img, info);
  box.append(wrapper);
}

getById();
