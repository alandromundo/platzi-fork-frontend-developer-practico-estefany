const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector("img.menu");
const shoppingCartButton = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu = document.querySelector(".product-detail-cart");
const productDetailMenu = document.querySelector(".product-detail");
const productDetailCloseButton = document.querySelector(
  ".product-detail-close"
);
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".cards-container");

const menus = [desktopMenu, shoppingCartMenu, mobileMenu, productDetailMenu];

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartButton.addEventListener("click", toggleShoppingCartMenu);
productDetailCloseButton.addEventListener("click", closeProductDetailMenu);

function toggleDesktopMenu() {
  openCloseMenu(desktopMenu);
}

function toggleMobileMenu() {
  openCloseMenu(mobileMenu);
}

function toggleShoppingCartMenu() {
  openCloseMenu(shoppingCartMenu);
}

function toggleProductDetailMenu() {
  openCloseMenu(productDetailMenu);
}

function openCloseMenu(menuToInteract) {
  // Si el menú que intentamos abrir ya está abierto, entonces lo que queremos es cerrarlo
  if (!menuToInteract.classList.contains("inactive")) {
    menuToInteract.classList.add("inactive");
  }
  // Si intentamos abrir otro menu que no sea el que ya esta abierto entonces seguimos la siguiente lógica: cerrar los demás menus
  // y abrir el menú de interés.
  else {
    // Recorremos el arreglo de menus y filtramos el menú de interés que presionamos para removerle la clase inactive, y a los demás
    // agregarle la clase inactive
    for (const menuItem of menus) {
      if (!menuItem.classList.contains(menuToInteract.classList[0])) {
        menuItem.classList.add("inactive");
      } else {
        menuItem.classList.remove("inactive");
      }
    }
  }
}

// function openProductDetailMenu() {
//   productDetailMenu.classList.remove("inactive");
// }

function closeProductDetailMenu() {
  productDetailMenu.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 12700,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bicycle helmet",
  price: 1200,
  image:
    "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Bicycle helmet",
  price: 1600,
  image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
});
productList.push({
  name: "Bicycle helmet",
  price: 1500,
  image:
    "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Seat",
  price: 300,
  image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
});
productList.push({
  name: "Tennis Montain Bike",
  price: 2200,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
});
productList.push({
  name: "Sunglasses",
  price: 800,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
});
productList.push({
  name: "Sunglasses",
  price: 600,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
});
productList.push({
  name: "Bicycle seat bag",
  price: 876,
  image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    // productCard.addEventListener("click", toggleProductDetailMenu);

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", toggleProductDetailMenu);

    const productOverview = document.createElement("div");
    productOverview.classList.add("product-overview");

    const productOverviewDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productOverviewDiv.appendChild(productPrice);
    productOverviewDiv.appendChild(productName);

    const productOverviewFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productOverviewFigure.appendChild(productImgCart);

    productOverview.append(productOverviewDiv, productOverviewFigure);

    productCard.append(productImg, productOverview);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
