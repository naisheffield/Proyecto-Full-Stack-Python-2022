import { obtenerDataDeJSON } from "./storage/jsonDataFetching.js";
import { inicializarListadoPaquetes } from "./ui/listadoPaquetes.js";
import { inicializarFiltroPequetes } from "./ui/filtroPaquetes.js";
import { inicializarBotonCarrito } from "./ui/botonCarrito.js";
import { inicializarBotonBurgerMenu } from "./ui/botonBurgerMenu.js";

async function inicializar() {
  const data = await obtenerDataDeJSON();

  inicializarListadoPaquetes(data);
  inicializarFiltroPequetes(data);
  inicializarBotonCarrito();
  inicializarBotonBurgerMenu();
}

inicializar();
