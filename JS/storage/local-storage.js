const LS_KEY = "carrito";

function agregarALocalStorage(itemNuevo) {
  const itemsEnLS = JSON.parse(localStorage.getItem(LS_KEY));

  if (itemsEnLS === null) {
    localStorage.setItem(LS_KEY, JSON.stringify([itemNuevo]));
  } else {
    const itemsActualizados = agregarArticulo(itemNuevo, itemsEnLS);
    console.log(itemsActualizados);
    localStorage.setItem(LS_KEY, JSON.stringify(itemsActualizados));
  }
}

function obtenerItemsLocalStorage() {
  return JSON.parse(localStorage.getItem(LS_KEY));
}

function agregarArticulo(itemNuevo, listadoItems) {
  let esArticuloNuevo = true;

  let listadoActualizado = listadoItems.map(item => {
    if(item.id === itemNuevo.id) {
      item.cantidad = item.cantidad + itemNuevo.cantidad;
      esArticuloNuevo = false;
    }
    return item;
  });

  if(esArticuloNuevo) {
    listadoActualizado.push(itemNuevo);
  }

  return listadoActualizado;
}

export { agregarALocalStorage, obtenerItemsLocalStorage };
