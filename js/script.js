const container = document.querySelector(".container");
const header = document.querySelector(".main-header");
const toggleBar = document.querySelector(".toggle-mobile");

container.addEventListener("scroll", () => {
  header.style.backgroundColor = "var(--color-secondary)";
  header.style.boxShadow = "0 4px 12px var(--color-black)";
});

toggleBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    e.target.classList.remove("fa-bars");
    e.target.classList.add("fa-times");
  } else if (e.target.classList.contains("fa-times")) {
    e.target.classList.add("fa-bars");
    e.target.classList.remove("fa-times");
  }
  header.classList.toggle("active");
});

const buttons = document.querySelectorAll(".btn-primary");
const popup = document.querySelector("#popup");
const close = document.querySelector("#close");
const productImage = document.querySelector(".product-image");
const products = document.querySelectorAll(".product");
const colors = document.querySelectorAll(".color");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    container.classList.toggle("active");
    popup.classList.toggle("active");
  })
);

close.addEventListener("click", () => {
  container.classList.toggle("active");
  popup.classList.toggle("active");
});

document.getElementById("cart").addEventListener("click", () => {
  container.classList.toggle("active");
  document.querySelector(".cart-popup").classList.toggle("active");
});

document.getElementById("hide").addEventListener("click", () => {
  container.classList.toggle("active");
  document.querySelector(".cart-popup").classList.toggle("active");
});

products.forEach((product) =>
  product.addEventListener("click", () => {
    products.forEach((product) => product.classList.remove("selected"));
    product.classList.add("selected");
    const image = product.firstElementChild.getAttribute("src");
    productImage.firstElementChild.setAttribute("src", image);
  })
);

let image;
colors.forEach((color, index) => {
  color.addEventListener("click", () => {
    image = products[index].firstElementChild.getAttribute("src");
    productImage.firstElementChild.setAttribute("src", image);
    products.forEach((product, ind) => {
      if (ind != index) {
        product.style.display = "none";
        product.classList.remove("selected");
      } else {
        product.style.display = "block";
        product.classList.add("selected");
      }
    });
  });
});

function createItem(source, count) {
  const item = document.createElement("div");
  const cartList = document.querySelector(".cart-item-list");
  item.className = "item";
  item.innerHTML = `
  <div class="item-image">
    <img src=${source} alt="watch" />
  </div>
  <div class="item-details">
    <h3>0.4 Trackmate XE</h3>
    <h3>$85.00</h3>
    <div class="item-count">
      <i class="fas fa-minus"></i>
      <p class="text-primary" id="count">${count}</p>
      <i class="fas fa-plus"></i>
    </div>
  </div>`;

  cartList.appendChild(item);
}

const addToCart = document.getElementById("add");

addToCart.addEventListener("click", () => {
  const quantity = document.getElementById("quantity").value;
  createItem(image, quantity);
  document.getElementById("total").innerText = `$${quantity * 86}`;
});
