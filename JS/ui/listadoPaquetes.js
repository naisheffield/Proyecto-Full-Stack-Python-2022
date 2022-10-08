import paquetesDataCompleta from "../../Data/paquetes.json" assert { type: "json" };
import { PaqueteCard } from "./componentes/PaqueteCard.js";
import { PaqueteDetalle } from "./componentes/PaqueteDetalle.js";
import { agregarALocalStorage } from "../storage/local-storage.js";

function inicializarListadoPaquetes() {
  renderizarListadoPaquetes(paquetesDataCompleta);
}

function renderizarListadoPaquetes(listadoPaquetes) {
  let { paquetes } = listadoPaquetes;

  if (paquetes.length === 0) {
    renderizarMensaje("NO SE HAN ENCONTRADO PAQUETES");
  } else {
    paquetes.forEach(paquete => renderizarPaquete(paquete));
  }
}

// implementar esta funcion con el filtro de la página Paquetes
// function renderizarPaquetesFiltrados(listadoPaquetes) {
//   eliminarComponentesHijos("grilla-paquetes");
//   renderizarMensaje("");
//   renderizarListadoPaquetes(listadoPaquetes);
// }

function renderizarPaquete(dataPaquete) {
  const elementoContenedor = document.getElementById("grilla-paquetes");

  const onClickCallback = () => {
    renderizarDetallesPaquete(dataPaquete);
  }

  const paqueteMapeado = new PaqueteCard(dataPaquete, onClickCallback);
  const paqueteElementoCard = paqueteMapeado.crearElemento();
  
  elementoContenedor.appendChild(paqueteElementoCard);
}

function renderizarDetallesPaquete(dataPaquete) {
  const seccionListadoPaquetes = document.querySelector("#packs-list");
  const seccionDetallePaquete = document.querySelector("#pack-details");

  seccionListadoPaquetes.style.display = "none";
  seccionDetallePaquete.style.display = "block";

  // Callback placeholder.
  // TO-DO: implementar carrito y localStorage
  const agregarACarritoCB = (e) => {
    e.preventDefault();

    const cantidad = document.getElementById("cantidad-pasajes").value;
    const id = document.getElementById("pack-details-container").dataset.id;
    const paquete = { id, cantidad: parseInt(cantidad) };

    agregarALocalStorage(paquete);
  }

  const detallesPaqueteMapeado = new PaqueteDetalle(dataPaquete, agregarACarritoCB);
  const detallesElemento = detallesPaqueteMapeado.crearElemento();

  seccionDetallePaquete.appendChild(detallesElemento);
}

// En caso que se necesite en otra parte del sitio exportar a un archivo separado
function renderizarMensaje(texto) {
  const elementoMensaje = document.getElementById("mensaje");
  elementoMensaje.textContent = texto;

  if (texto.length === 0) {
    elementoMensaje.style.display = "none";
  } else {
    elementoMensaje.style.display = "block";
  }
}

// --> Implementar junto con el filtro
// function eliminarComponentesHijos(idElementoContenedor) {
//   const elementoContenedor = document.getElementById(idElementoContenedor);

//   while(elementoContenedor.childElementCount > 0) {
//     elementoContenedor.removeChild(elementoContenedor.lastChild);
//   }
// }

export { inicializarListadoPaquetes, renderizarListadoPaquetes };
