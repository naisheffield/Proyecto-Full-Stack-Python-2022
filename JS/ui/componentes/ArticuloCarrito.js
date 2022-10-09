class ArticuloCarrito {
  constructor(articuloData) {
    // articuloData es la info obtenida de paquetes.json
    // propiedades del objeto ArticuloCarrito para utilizar con el método render()
  }

  render(idElementoContenedor) {
    const elementoContenedor = document.getElementById(idElementoContenedor);

    elementoContenedor.innerHTML = `<h3>Articulo del carrito</h3>`;
  }
}

export { ArticuloCarrito };
