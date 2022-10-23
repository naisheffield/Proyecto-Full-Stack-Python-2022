import { renderizarListadoPaquetes } from "../ui/listadoPaquetes.js";

function inicializarFiltroPequetes(data) {
  const filtro = document.getElementById("filtro");

  filtro.addEventListener("change", (e) => filtroHandler(e, data));
}

function filtroHandler(e, data) {
  e.preventDefault();

  let { paquetes } = data;
  const filtro = document.getElementById("filtro");
  const parametros = new FormData(filtro);
  
  const paquetesFiltrados = paquetes.filter(paquete => filtrarPaquetes(paquete, parametros));

  renderizarListadoPaquetes({ paquetes: paquetesFiltrados });
}

function filtrarPaquetes(item, formData) {
  return (
    validarUbicacion(item, formData.get("continente"))
    && validarDuracion(item, formData.get("duracion"))
    && validarReview(item, formData.get("review"))
    && validarPrecio(item, formData.get("precio"))
    && validarPromocion(item, formData.get("promocion"))
  );
}

function validarUbicacion(item, valor) {
  if (valor === "") return true;
  return item.destino.continente === valor;
}

function validarDuracion(item, valor) {
  if (valor === "") return true;
  return parseInt(item.duracion.total) <= parseInt(valor);
}

function validarReview(item, valor) {
  if (valor === "") return true;
  return parseFloat(item.review.promedio) >= parseFloat(valor);
}

function validarPrecio(item, valor) {
  if (valor === "") return true;
  return parseInt(item.precio) <= parseInt(valor);
}

function validarPromocion(item, valor) {
  if (valor === null) return true;
  return item.promocion === valor;
}

export { inicializarFiltroPequetes };
