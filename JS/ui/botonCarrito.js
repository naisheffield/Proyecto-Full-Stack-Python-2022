import { obtenerItemsLocalStorage } from "../storage/local-storage.js";

function inicializarBotonCarrito() {
  actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
  const contador = document.querySelector(".header-cart-counter");
  const itemsLS = obtenerItemsLocalStorage();
  
  if (itemsLS) {
    contador.style.display = "flex";
    contador.textContent = itemsLS.length;
  } else {
    contador.style.display = "none";
  }
}

export { inicializarBotonCarrito };
