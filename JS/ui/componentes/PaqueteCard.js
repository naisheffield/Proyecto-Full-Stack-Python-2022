class PaqueteCard {
  constructor(paqueteData) {
    this.id = paqueteData.id;
    this.nombre = paqueteData.nombre;
    this.imageURL = paqueteData.imagenes[0];
    this.destino = paqueteData.destino;
    this.duracion = paqueteData.duracion;
    this.review = paqueteData.review;
    this.precio = paqueteData.precio;
  }

  crearElemento() {
    const cardContenedor = document.createElement('a');
    cardContenedor.href = `promociones.html?id=${this.id}`;
    cardContenedor.target = "_blank";
    cardContenedor.id = `pack-${this.id}`;
    cardContenedor.className = 'card-container'; 

    cardContenedor.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${this.imageURL}" alt="imagen de ${this.destino.pais}">
      </div>
      <div class="card-info-container">
        <p>${this.nombre}</p>
        <p>${this.destino.ciudad} | ${this.destino.pais} | ${this.destino.continente}</p>
        <p>${this.duracion.dias} días | ${this.duracion.noches} noches</p>
        <p>${this.review.promedio} | ${this.review.cantidad} reviews</p>
        <p>${this.precio} U$S + impuestos</p>
      </div>
    `;

    return cardContenedor;
  }
}

export { PaqueteCard };
