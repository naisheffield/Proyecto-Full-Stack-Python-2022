import { obtenerDataDeJSON } from "../storage/jsonDataFetching.js";
import { PaqueteCard } from "./componentes/PaqueteCard.js";

async function inicializarListadoPaquetes() {
  const data = await obtenerDataDeJSON();
  renderizarListadoPaquetes(data);
}

function renderizarListadoPaquetes(listadoPaquetes) {
  let { paquetes } = listadoPaquetes;

  if (paquetes.length === 0) {
    renderizarMensaje("NO SE HAN ENCONTRADO PAQUETES");
  } else {
    paquetes.forEach(paquete => renderizarPaquete(paquete))
  }
}

function renderizarPaquete(dataPaquete) {
  const elementoContenedor = document.getElementById("grilla-paquetes");

  const paqueteMapeado = new PaqueteCard(dataPaquete);
  const paqueteElementoCard = paqueteMapeado.crearElemento();
  
  elementoContenedor.appendChild(paqueteElementoCard);
}

// mover a otro archivo (?)
export function renderizarMensaje(texto) {
  const elementoMensaje = document.getElementById("mensaje");
  elementoMensaje.textContent = texto;

  if (texto) {
    elementoMensaje.style.display = "flex";
  } else {
    elementoMensaje.style.display = "none";
  }
}

export { inicializarListadoPaquetes, renderizarListadoPaquetes };
