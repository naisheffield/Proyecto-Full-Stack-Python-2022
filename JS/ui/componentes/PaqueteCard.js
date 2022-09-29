class PaqueteCard {
  constructor(paqueteData, onClickCallback) {
    this.id = paqueteData.id;
    this.nombre = paqueteData.nombre;
    this.imageURL = paqueteData.imagenes[0];
    this.destino = paqueteData.destino;
    this.duracion = paqueteData.duracion;
    this.review = paqueteData.review;
    this.precio = paqueteData.precio;
    this.onClickCallback = onClickCallback;
  }

  crearElemento() {
    const cardContenedor = document.createElement('div');
    cardContenedor.id = `pack-${this.id}`;
    cardContenedor.className = 'card-container'; 
    cardContenedor.addEventListener('click', this.onClickCallback);

    cardContenedor.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${this.imageURL}" alt="${this.destino.ciudad}-image">
      </div>
      <p>${this.nombre}</p>
      <p>${this.destino.ciudad} | ${this.destino.pais} | ${this.destino.continente}</p>
      <p>${this.duracion.dias} días | ${this.duracion.noches} noches</p>
      <p>${this.review.promedio} | ${this.review.cantidad} reviews</p>
      <p>${this.precio} U$S + impuestos</p>
    `;

    return cardContenedor;
  }
}

export { PaqueteCard };
