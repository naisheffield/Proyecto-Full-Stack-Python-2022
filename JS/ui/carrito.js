import paquetesDataCompleta from "../../Data/paquetes.json" assert { type: "json" };
import { ArticuloCarrito } from "./componentes/ArticuloCarrito.js";
import { obtenerItemsLocalStorage, eliminarItemLocalStorage } from "../storage/local-storage.js";
import { renderizarMensaje } from "./listadoPaquetes.js";
import { calcularCosto } from "../utils/calcularCosto.js";
import { mapearArticulosConCantidad, mapearArticulosConCosto } from "../utils/filtros-mappers.js";

function inicializarCheckout() {
  const { paquetes } = paquetesDataCompleta;
  const articulosEnCarrito = obtenerItemsLocalStorage();

  if (articulosEnCarrito === null) {
    renderizarMensaje("No hay artículos en el Carrito.");
    renderizarDetalleCheckout([], { costo: 0, impuestos: 0 });
    return;
  }

  const dataArticulosEnCarrito = mapearArticulosConCantidad(articulosEnCarrito, paquetes);
  const articulosConCosto = mapearArticulosConCosto(dataArticulosEnCarrito);
  const costoTotal = calcularCosto(articulosConCosto);
  
  renderizarArticulosCarrito(dataArticulosEnCarrito);
  renderizarDetalleCheckout(articulosConCosto, costoTotal);
}

function renderizarArticulosCarrito(dataArticulos) {
  const listadoContenedor = document.getElementById("cart-list");

  const eliminarArticuloCallBack = (e) => {
    const itemID = e.target.dataset.id;
    eliminarItemLocalStorage(itemID);
    window.location.reload();
  }

  dataArticulos.forEach(articulo => {
    const articuloMapeado = new ArticuloCarrito(articulo, eliminarArticuloCallBack);
    const articuloElemento = articuloMapeado.crearElemento();

    listadoContenedor.appendChild(articuloElemento);    
  })
};

function renderizarDetalleCheckout(articulosConCosto, costoTotal) {
  const { costo, impuestos } = costoTotal;

  const listadoArticulos = document.getElementById("articulos-listado");
  const subtotalElemento = document.getElementById("costo-subtotal");
  const impuestosElemento = document.getElementById("costo-impuestos");
  const totalElemento = document.getElementById("costo-total");
  
  articulosConCosto.forEach(articulo => {
    const articuloElemento = document.createElement("div");
    articuloElemento.className = "cart-sidebar-pack-item";
  
    articuloElemento.innerHTML = `
      <span>${articulo.nombre}</span>
      <span>${articulo.cantidad} x ${articulo.precio},00 US$</span>
    `;

    listadoArticulos.appendChild(articuloElemento);
  })

  subtotalElemento.textContent = `${costo},00 US$`;
  impuestosElemento.textContent = `${impuestos},00 US$`;
  totalElemento.textContent = `${costo + impuestos},00 US$`;
};

export { inicializarCheckout };
