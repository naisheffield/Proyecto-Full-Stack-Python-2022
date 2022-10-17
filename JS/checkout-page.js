import { inicializarCheckout } from "./ui/carrito.js";
import { inicializarBotonCarrito } from "./ui/botonCarrito.js";
import { inicializarBotonBurgerMenu } from "./ui/botonBurgerMenu.js";

function inicializar() {
  inicializarBotonBurgerMenu();
  inicializarBotonCarrito();
  inicializarCheckout();
}

inicializar();
