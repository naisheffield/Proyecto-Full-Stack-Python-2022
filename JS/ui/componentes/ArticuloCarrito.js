class ArticuloCarrito {
  constructor(articuloData) {
    this.id = articuloData.id;
    this.nombre = articuloData.nombre;
    this.imageURL = articuloData.imagenes[0];
    this.precio = articuloData.precio;
    this.cantidad = articuloData.cantidad;
    this.destino = articuloData.destino;
    this.duracion = articuloData.duracion;
    this.servicios = articuloData.servicios
  }

  crearElemento() {
    const articuloContenedor = document.createElement("div");
    articuloContenedor.className = "cart-item-container";
    articuloContenedor.dataset.id = this.id;

    const listadoServicios = this.servicios.map(servicio => `<li>${servicio}.</li>`).join("");

    articuloContenedor.innerHTML = `
      <div class="img-container">
        <img class="card-img" src=${this.imageURL} alt="${this.destino.pais} item image">
      </div>
      <div class="item-info-container">
        <div class="item-title">
          <h3>${this.nombre}</h3>
        </div>
        <div>
          <span>${this.cantidad} pasajes</span>
          <span>${this.precio} US$ + impuestos c/u</span>
        </div>
        <div>
          <span>${this.destino.ciudad} | ${this.destino.pais} | ${this.destino.continente}</span>
          <span>${this.duracion.dias} días | ${this.duracion.noches} noches</span>
        </div>
        <ul>
          ${listadoServicios}
        </ul>
        <button>Eliminar</button>
      </div>
    `;

    return articuloContenedor;
  }
}

export { ArticuloCarrito };
