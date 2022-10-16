import { inicializarListadoPaquetes } from "./ui/listadoPaquetes.js";
import { inicializarBotonCarrito } from "./ui/botonCarrito.js";
import { inicializarBotonBurgerMenu } from "./ui/botonBurgerMenu.js";
import { inicializarModal } from "./ui/modal.js";

function inicializar() {
  inicializarBotonBurgerMenu();
  inicializarBotonCarrito();
  inicializarListadoPaquetes();
  inicializarModal();
}

inicializar();
