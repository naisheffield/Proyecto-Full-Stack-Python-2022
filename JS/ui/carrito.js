import { obtenerDataDeJSON } from "../storage/jsonDataFetching.js";
import { ArticuloCarrito } from "./componentes/ArticuloCarrito.js";
import { obtenerItemsLocalStorage, eliminarItemLocalStorage } from "../storage/local-storage.js";
import { renderizarMensaje } from "./listadoPaquetes.js";
import { calcularCosto } from "../utils/calcularCosto.js";
import { mapearArticulosConCantidad, mapearArticulosConCosto } from "../utils/filtros-mappers.js";

async function inicializarCheckout() {
  const data = await obtenerDataDeJSON();
  actualizarCarrito(data);
}

function actualizarCarrito(data) {
  const { paquetes } = data;
  const articulosEnCarrito = obtenerItemsLocalStorage();
  renderizarMensaje();

  if (articulosEnCarrito === null) {
    renderizarMensaje("No hay artículos en el Carrito.");
    renderizarDetalleCheckout([], { costo: 0, impuestos: 0 });
    botonCajaHandler("El carrito se encuentra vacío!", false);
    return;
  }

  const dataArticulosEnCarrito = mapearArticulosConCantidad(articulosEnCarrito, paquetes);
  const articulosConCosto = mapearArticulosConCosto(dataArticulosEnCarrito);
  const costoTotal = calcularCosto(articulosConCosto);
  
  renderizarArticulosCarrito(dataArticulosEnCarrito);
  renderizarDetalleCheckout(articulosConCosto, costoTotal);
  botonCajaHandler("Gracias por su compra!", true);
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

function eliminarArticulosCarrito() {
  const listado = document.getElementById("cart-list");

  while (listado.childElementCount > 0) {
    listado.removeChild(listado.lastChild);
  }
}

function botonCajaHandler(mensaje, compraSatisfactoria) {
  const boton = document.querySelector(".cart-sidebar-btn");
  
  boton.addEventListener("click", () => {
    renderizarMensaje(mensaje);

    if (compraSatisfactoria) {
      eliminarArticulosCarrito();
      localStorage.clear();

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  })
}

export { inicializarCheckout };
