import paquetesDataCompleta from "../../Data/paquetes.json" assert { type: "json" };
import { ArticuloCarrito } from "./componentes/ArticuloCarrito.js";
import { obtenerItemsLocalStorage } from "../storage/local-storage.js";
import { renderizarMensaje } from "./listadoPaquetes.js";

function inicializarCheckout() {
  const { paquetes } = paquetesDataCompleta;
  const articulosEnCarrito = obtenerItemsLocalStorage();

  if (articulosEnCarrito === null) {
    renderizarMensaje("No hay artículos en el Carrito.");
    renderizarDetalleCheckout([], { costo: 0, impuestos: 0 });
  } else {
    const dataArticulos = articulosEnCarrito.map(articulo => {
      const [articuloFiltrado] = paquetes.filter(paquete => paquete.id === articulo.id);

      return { ...articuloFiltrado, cantidad: articulo.cantidad };
    });

    const articulosConCosto = mapearArticulosConCosto(dataArticulos);
    const costoTotal = calcularCosto(articulosConCosto);
    
    renderizarArticulosCarrito(dataArticulos);
    renderizarDetalleCheckout(articulosConCosto, costoTotal);
  }
}

function renderizarArticulosCarrito(dataArticulos) {
  const listadoContenedor = document.getElementById("cart-list");

  dataArticulos.forEach(articulo => {
    const articuloMapeado = new ArticuloCarrito(articulo);
    const articuloElemento = articuloMapeado.crearElemento();

    listadoContenedor.appendChild(articuloElemento);    
  })
};

function renderizarDetalleCheckout(articulosConCosto, costoTotal) {
  console.log("articulos:", articulosConCosto);
  console.log("costo:", costoTotal);
};

function mapearArticulosConCosto(dataArticulos) {
  return dataArticulos.map(({ nombre, precio, cantidad }) => ({ nombre, precio, cantidad }));
}

// Esta funcion puede estar en un nuevo archivo de utilidades
function calcularCosto(articulos) {
  return articulos.reduce((acc, articulo) =>{
    const precio = parseInt(articulo.precio);
    const cantidad = parseInt(articulo.cantidad);
    const costo = precio * cantidad;
    const impuestos = costo * 0.25;

    return {
      costo: acc.costo + costo,
      impuestos: acc.impuestos + impuestos 
    };
  }, { costo: 0, impuestos: 0 });
}

export { inicializarCheckout };
