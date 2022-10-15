import { inicializarListadoPaquetes } from "./ui/listadoPaquetes.js";
import { inicializarBotonCarrito } from "./ui/botonCarrito.js";
import { inicializarBotonBurgerMenu } from "./ui/botonBurgerMenu.js";

function inicializar() {
  inicializarBotonBurgerMenu();
  inicializarBotonCarrito();
  inicializarListadoPaquetes();
}

inicializar();
