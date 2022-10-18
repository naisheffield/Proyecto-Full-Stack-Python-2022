import { PaqueteDetalle } from "./componentes/PaqueteDetalle.js";
import { obtenerDataDeJSON } from "../storage/jsonDataFetching.js";
import { agregarALocalStorage } from "../storage/local-storage.js";
import { filtrarItems } from "../utils/filtros-mappers.js";
import { modalHandler } from "./modal.js";
import { actualizarContadorCarrito } from "./botonCarrito.js";

async function inicializarPaquete(id) {
  const data = await obtenerDataDeJSON();
  const [paqueteData] = filtrarItems(data.paquetes, "id", id);
  
  renderizarDetallesPaquete(paqueteData);
}

function renderizarDetallesPaquete(dataPaquete) {
  const seccionDetallePaquete = document.querySelector("#pack-details");

  const agregarACarritoCB = (e) => {
    e.preventDefault();

    const cantidad = document.getElementById("cantidad-pasajes").value;
    const id = document.getElementById("pack-details-container").dataset.id;
    const paquete = { id, cantidad: parseInt(cantidad) };

    agregarALocalStorage(paquete);
    actualizarContadorCarrito();
  }

  const detallesPaqueteMapeado = new PaqueteDetalle(dataPaquete, agregarACarritoCB, modalHandler);
  const detallesElemento = detallesPaqueteMapeado.crearElemento();
  seccionDetallePaquete.appendChild(detallesElemento);
}

export { inicializarPaquete };
