
function agregarALocalStorage(itemNuevo) {
  const itemsEnLS = JSON.parse(localStorage.getItem("carrito"));

  if (itemsEnLS === null) {
    localStorage.setItem("carrito", JSON.stringify([itemNuevo]));
  } else {
    const itemsActualizados = agregarCantidad(itemNuevo, itemsEnLS);
    localStorage.setItem("carrito", JSON.stringify(itemsActualizados));
  }
}

function agregarCantidad(itemNuevo, listadoItems) {
  const listadoActualizado = listadoItems.map(item => {
    if(item.id === itemNuevo.id) {
      item.cantidad = item.cantidad + itemNuevo.cantidad;
    }
    return item;
  });

  return listadoActualizado;
}

export { agregarALocalStorage };
