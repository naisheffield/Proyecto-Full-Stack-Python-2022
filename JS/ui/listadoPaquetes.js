import paquetesDataCompleta from "../../Data/paquetes.json" assert { type: "json" };
import { PaqueteCard } from "./componentes/PaqueteCard.js";

function inicializarListadoPaquetes() {
  console.log("inicializando el listado de paquetes cuando carga la página");
  renderizarListadoPaquetes(paquetesDataCompleta);
}

function renderizarListadoPaquetes(listadoPaquetes) {
  // 1) elimina los paquetes previos
  // 2) agrega los paquetes nuevos (o filtrados)

  const { paquetes } = listadoPaquetes;

  const onClickHandler = (e) => {
    // Ver como mostrar la seccion de detalles...
    const id = e.currentTarget.id.split('pack-')[1];
    console.log(paquetes.filter(paquete => paquete.id === id));
  }

  paquetes.forEach(paquete => renderizarPaquete(paquete, onClickHandler));
}

function renderizarPaquete(dataPaquete, onClickCallback) {
  const grillaContenedora = document.getElementById("grilla-paquetes");

  const paqueteMapeado = new PaqueteCard(dataPaquete, onClickCallback);
  const paqueteElementoCard = paqueteMapeado.crearElemento();
  
  grillaContenedora.appendChild(paqueteElementoCard);
}

function eliminarListadoPaquetes() {
  const grillaContenedora = document.getElementById("grilla-paquetes");

  while(grillaContenedora.childElementCount > 0) {
    grillaContenedora.removeChild(grillaContenedora.lastChild);
  }
}

export { inicializarListadoPaquetes, renderizarListadoPaquetes };
