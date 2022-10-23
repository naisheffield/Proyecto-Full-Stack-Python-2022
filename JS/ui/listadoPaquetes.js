import { PaqueteCard } from "./componentes/PaqueteCard.js";

async function inicializarListadoPaquetes(data) {
  renderizarListadoPaquetes(data);
}

function renderizarListadoPaquetes(listadoPaquetes) {
  eliminarListadoPaquetes();

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

function eliminarListadoPaquetes() {
  const grilla = document.getElementById("grilla-paquetes");

  while (grilla.childElementCount > 0) {
    grilla.removeChild(grilla.lastElementChild);
  }
}

export { inicializarListadoPaquetes, renderizarListadoPaquetes };
